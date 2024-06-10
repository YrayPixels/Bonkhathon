import {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

const nextConfigFunction = async (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
        const withPWA = (await import("@next-pwa")).default({
            dest: "public",
        });
        return withPWA(nextConfig);
    }
    return nextConfig;
};

export default nextConfigFunction;