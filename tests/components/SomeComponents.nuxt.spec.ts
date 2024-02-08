// tests/components/SomeComponents.nuxt.spec.ts
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";

it("can render some component", async () => {
  await renderSuspended(SomeComponent);
  expect(screen.getByText("This is an auto-imported component")).toBeDefined();
});
