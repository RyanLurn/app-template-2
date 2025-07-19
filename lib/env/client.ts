import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_BETTER_AUTH_URL: z.string().min(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
  }
});

export default clientEnv;
