// next.config.mjs
const nextConfig = {
    images: {
        // Konfiguracja dla obrazów z folderu 'assets'
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Zezwól na wszystkie hosty (jeśli używasz zewnętrznych obrazów)
            },
        ],
        // Dla obrazów lokalnych w src:
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;
