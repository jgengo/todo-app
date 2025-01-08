"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { StatusBar } from "@/components/statusbar";
import { CalendarView } from "@/components/calendar-view";

export default function Page() {
  const [startDate, setStartDate] = useState(new Date());
  const [viewDays, setViewDays] = useState(5);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentDate={startDate} onDateChange={setStartDate} />
      <main className="flex-1">
        <CalendarView
          startDate={startDate}
          onDateChange={setStartDate}
          viewDays={viewDays}
        />
      </main>
      <StatusBar viewDays={viewDays} onViewChange={setViewDays} />
    </div>
  );
}
