// Cache for generated URLs to avoid recomputation
const urlCache = new Map<string, string>();

export function getDumnyImageUrl(title: string, orientation: string = "400x300") {
    // Create a cache key
    const cacheKey = `${title}-${orientation}`;
    
    // Return cached URL if available
    if (urlCache.has(cacheKey)) {
        return urlCache.get(cacheKey)!;
    }
    
    // Limit title length to reduce URL size
    const t = title.length > 20 ? title.substring(0, 20) + '...' : title;
    
    // Generate and cache the URL
    const url = `https://dummyimage.com/${orientation}/8b5cf6/ffffff&text=${encodeURIComponent(t)}`;
    urlCache.set(cacheKey, url);
    
    return url;
}