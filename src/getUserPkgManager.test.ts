import { afterEach, describe, expect, it } from "vitest";
import { getUserPkgManager } from "./getUserPkgManager";

const originalUserAgent = process.env.npm_config_user_agent;

describe("getUserPkgManager", () => {
  afterEach(() => {
    process.env.npm_config_user_agent = originalUserAgent;
  });

  it("detects npm", () => {
    process.env.npm_config_user_agent = "npm";
    expect(getUserPkgManager()).toEqual("npm");
  });

  it("detects yarn", () => {
    process.env.npm_config_user_agent = "yarn";
    expect(getUserPkgManager()).toEqual("yarn");
  });

  it("detects pnpm", () => {
    process.env.npm_config_user_agent = "pnpm";
    expect(getUserPkgManager()).toEqual("pnpm");
  });

  it("falls back to npm if user agent is unknown", () => {
    process.env.npm_config_user_agent = "foobar";
    expect(getUserPkgManager()).toEqual("npm");
  });

  it("falls back to npm if user agent is not set", () => {
    process.env.npm_config_user_agent = undefined;
    expect(getUserPkgManager()).toEqual("npm");
  });
});
