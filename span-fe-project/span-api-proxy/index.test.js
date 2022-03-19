import { handler } from "./index";

describe("Lambda function", () => {
  it("should return with programming cliché", async () => {
    const result = await handler();
    expect(result).toBe("Hello world");
  });
});
