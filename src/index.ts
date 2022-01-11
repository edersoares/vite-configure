import { loadEnv, ConfigEnv, UserConfigExport } from "vite";

export default function configure(config: ConfigEnv): UserConfigExport {
  const env = loadEnv(config.mode, process.cwd());

  const hmrProtocol = env.VITE_SERVER_HMR_PROTOCOL;
  const hmrHost = env.VITE_SERVER_HMR_HOST;
  const hmrPort = Number(env.VITE_SERVER_HMR_PORT);
  const key = env.VITE_SERVER_HTTPS_KEY;
  const cert = env.VITE_SERVER_HTTPS_CERT;
  const https = key && cert ? { key, cert } : false;

  return {
    server: {
      https,
      hmr: {
        protocol: hmrProtocol,
        host: hmrHost,
        port: hmrPort,
      },
    },
  };
}
