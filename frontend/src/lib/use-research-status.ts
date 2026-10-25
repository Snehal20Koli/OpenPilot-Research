"use client";

import { useCallback, useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/config";
import type { ConnectionState, ResearchStatusResponse } from "@/lib/types";

export function useResearchStatus() {
  const [state, setState] = useState<ConnectionState>("loading");
  const [status, setStatus] = useState<ResearchStatusResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setState("loading");
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/research/status`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Status request failed (${response.status})`);
      }

      const data = (await response.json()) as ResearchStatusResponse;
      setStatus(data);
      setState("connected");
    } catch (cause) {
      setStatus(null);
      setState("error");
      setError(
        cause instanceof Error
          ? cause.message
          : "Unable to load research status",
      );
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { state, status, error, load };
}
