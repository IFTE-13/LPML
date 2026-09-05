"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";

export function LandownerForm() {
  return (
    <form className="mt-8 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Full Name
          </label>
          <Input
            placeholder="John Smith"
            className="mt-2 rounded-none"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Email
          </label>
          <Input
            type="email"
            placeholder="john@email.com"
            className="mt-2 rounded-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Phone
          </label>
          <Input
            placeholder="+1 234 567 890"
            className="mt-2 rounded-none"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Property Type
          </label>

          <select className="mt-2 h-10 w-full border border-input bg-background px-3 text-sm">
            <option>Apartment</option>
            <option>House</option>
            <option>Commercial</option>
            <option>Mixed Use</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Property Address
        </label>

        <Input
          placeholder="Property Address"
          className="mt-2 rounded-none"
        />
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Number of Units
        </label>

        <Input
          type="number"
          placeholder="12"
          className="mt-2 rounded-none"
        />
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Management Requirements
        </label>

        <Textarea
          rows={6}
          placeholder="Tell us about your property and how we can help..."
          className="mt-2 rounded-none"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Submit Enquiry

        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </button>
    </form>
  );
}