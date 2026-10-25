"use client";

import { useCallback, useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/config";
import type { ConnectionState, HealthResponse } from "@/lib/types";

export function useApiHealth() {
  const [state, setState] = useState<ConnectionState>("loading");
  const [appName, setAppName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const check = useCallback(async () => {
    setState("loading");
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/health`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Health check failed (${response.status})`);
      }

      const data = (await response.json()) as HealthResponse;
      if (data.status !== "ok") {
        throw new Error("API returned an unexpected health payload");
      }

      setAppName(data.app);
      setState("connected");
    } catch (cause) {
      setAppName(null);
      setState("error");
      setError(
        cause instanceof Error
          ? cause.message
          : "Unable to reach the OpenPilot Research API",
      );
    }
  }, []);

  useEffect(() => {
    void check();
  }, [check]);

  return { state, appName, error, check, apiUrl: API_BASE_URL };
}
