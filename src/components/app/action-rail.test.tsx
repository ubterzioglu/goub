import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ActionRail } from "@/components/app/action-rail";

describe("ActionRail", () => {
  it("renders the report's primary document actions", () => {
    render(<ActionRail />);

    expect(screen.getByRole("button", { name: "Sor" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ozetle" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Karsilastir" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tablo Cikar" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Risk Tara" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Gorev Uret" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Disa Aktar" })).toBeInTheDocument();
  });
});
