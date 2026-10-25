export type ConnectionState = "loading" | "connected" | "error";

export type HealthResponse = {
  status: string;
  app: string;
};

export type ResearchStatusResponse = {
  stage: string;
  label: string;
  description: string;
  implemented: string[];
  upcoming: string[];
};

export type NavItem = {
  href: string;
  label: string;
  description: string;
};
