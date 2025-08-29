"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { appConfig } from '@/configs/config';
import { PaginationController } from './pagination';
import { PostCard } from './post-card';

export interface MediumPost {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    content: string;
    thumbnail?: string;
    categories?: string[];
    guid: string;
}

interface MediumPostsProps {
    username?: string;
    postsPerPage?: number;
}

export const MediumPosts: React.FC<MediumPostsProps> = ({
    username = appConfig.mediumUsername,
    postsPerPage = 4
}) => {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    // If no username is provided, don't fetch posts
    const shouldFetchPosts = username && username.trim() !== '';

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const startIndex = currentPage * postsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

    useEffect(() => {
        if (!shouldFetchPosts) {
            setLoading(false);
            return;
        }

        const fetchMediumPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const rssUrl = `https://medium.com/feed/@${username}`;
                const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

                // Add timeout to prevent hanging
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

                const response = await fetch(apiUrl, {
                    signal: controller.signal,
                    // Add cache headers to reduce repeated requests
                    headers: {
                        'Cache-Control': 'no-cache',
                    },
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();

                if (data.status !== 'ok') {
                    throw new Error('Invalid RSS feed');
                }

                const formattedPosts: MediumPost[] = data.items.map((item: MediumPost) => {
                    const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
                    const thumbnail = imgMatch ? imgMatch[1] : null;
                    const cleanContent = item.content
                        ?.replace(/<[^>]*>/g, ''); // Remove HTML tags
                    const cleanDescription = item.description
                        ?.replace(/<[^>]*>/g, '') // Remove HTML tags
                        ?.substring(0, 150) + '...';

                    return {
                        title: item.title,
                        link: item.link,
                        pubDate: item.pubDate,
                        description: cleanDescription || '',
                        content: cleanContent || '',
                        thumbnail,
                        categories: item.categories || [],
                        guid: item.guid
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        // Add small delay to prevent blocking initial render
        const timerId = setTimeout(() => {
            fetchMediumPosts();
        }, 100);

        return () => {
            clearTimeout(timerId);
        };
    }, [username, shouldFetchPosts]);

    // If no username is provided, don't show the section
    if (!shouldFetchPosts) {
        return null;
    }

    if (error) {
        console.error('Error fetching Medium posts:', error);
        // Instead of returning null, let's show a message or handle gracefully
        return (
            <div id='blogs' className="relative w-full flex items-center justify-center mt-8 py-14">
                <div className="flex flex-col max-w-4xl w-full px-6 md:px-0">
                    <div className="mb-6 flex justify-between items-center">
                        <div className="text-4xl font-bold mb-2">Insights & Articles</div>
                    </div>
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No articles found. Check back later for updates.</p>
                    </div>
                </div>
            </div>
        );
    }

    // Handle case when there are no posts
    if (!loading && posts.length === 0) {
        return (
            <div id='blogs' className="relative w-full flex items-center justify-center mt-8 py-14">
                <div className="flex flex-col max-w-4xl w-full px-6 md:px-0">
                    <div className="mb-6 flex justify-between items-center">
                        <div className="text-4xl font-bold mb-2">Insights & Articles</div>
                    </div>
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">No articles published yet. Check back later for updates.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id='blogs' className="relative w-full flex items-center justify-center mt-8 py-14">
            <div className="flex flex-col max-w-4xl w-full px-6 md:px-0">
                {/* Header */}
                <div className="mb-6 flex justify-between items-center">
                    <div className="text-4xl font-bold mb-2">Insights & Articles</div>
                    <PaginationController totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

                {/* Posts Grid */}
                <PostsGrid loading={loading} currentPosts={currentPosts} postsPerPage={postsPerPage} />

                {/* Pagination Controls */}
                <PaginationController
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

function PostsGrid({ loading, postsPerPage, currentPosts }: { loading: boolean; postsPerPage: number; currentPosts: MediumPost[] }) {
    if (loading) {
        // show skeleton loading
        return (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[...Array(postsPerPage)].map((_, i) => (
                    <PostCard key={`blog-post-${i}`} post={{} as MediumPost} loading />
                ))}
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            {currentPosts.map((post) =>
                <PostCard key={post.guid} post={post} />
            )}
        </div>
    )
}