import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DOBContainer() {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getYearsArray() {
    const currentYear = new Date().getFullYear();
    const minYear = 1872;
    const years = Array.from(
      { length: currentYear - minYear + 1 },
      (_, i) => minYear + i
    );
    return years;
  }

  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: currentYear - 1947 + 1 },
    (_, i) => 1947 + i
  );

  return (
    <div className="flex  gap-2 flex-row">
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {months.map((month, i) => {
              return (
                <SelectItem key={i} value={month}>
                  {month}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Day" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Array.from({ length: 31 }, (_, i) => {
              return (
                <SelectItem key={i} value={i.toString() + 1}>
                  {i + 1}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
