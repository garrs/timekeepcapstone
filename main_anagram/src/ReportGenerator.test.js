import ReportGenerator from './ReportGenerator';

it('test', () => {
    console.log("fhsldkgnld")
  let scans = [{id: "XzdBMKJkEF5y6kpU6gKF", content: "Employee Muzet Maxwell timed out for Shift end", firstName: "Muzet", fullName: "Maxwell Muzet", goingToOrFro: "Shift end"  },
   {id: "K8vayKvh6F8k6xAhru9A", content: "Employee Sakura Uchiha timed out for Shift end", firstName: "Sakura", fullName: "Uchiha Sakura", goingToOrFro: "Shift end"  },
   {id: "u6qHaLM9mpFouqXFv6rs", content: "Employee Maria Traydor timed out for Shift end", firstName: "Maria", fullName: "Traydor Maria", goingToOrFro: "Shift end"  },
   {id: "2IMas6Lkp7aXF4km1MZR", content: "Employee Shion Tempest timed out for Shift end", firstName: "Shion", fullName: "Tempest Shion", goingToOrFro: "Shift end"  },
   {id: "ts86IFXYrbzKXdTtucR7", content: "Employee Maya Natsume timed out for Shift end", firstName: "Maya", fullName: "Natsume Maya", goingToOrFro: "Shift end"  },
   {id: "uwj9eV6svZK6P080XMWk", content: "Employee Velvet Crowe timed out for Shift end", firstName: "Velvet", fullName: "Crowe Velvet", goingToOrFro: "Shift end"  },
   {id: "a2LOg2bERd9F0FcpLtDX", content: "Employee Jenny Realight timed out for Shift end", firstName: "Jenny", fullName: "Realight Jenny", goingToOrFro: "Shift end"  },
   {id: "esgMu8REvCZ4S9sVNYcP", content: "Employee Milla Maxwell timed out for Shift end", firstName: "Milla", fullName: "Maxwell Milla", goingToOrFro: "Shift end"  },
   {id: "CTYBFAHb9zyo3Dx1RLYG", content: "Employee Velvet Crowe timed in for Returning from the errand", firstName: "Velvet", fullName: "Crowe Velvet", goingToOrFro: "Returning from the errand"  },
   {id: "iePWMW54jBECsIb7w5JE", content: "Employee Jenny Realight timed in for Returning from the errand", firstName: "Jenny", fullName: "Realight Jenny", goingToOrFro: "Returning from the errand"  },
   {id: "UK6g9cIK5rscv7UPGWTY", content: "Employee Jenny Realight timed out for Running an errand", firstName: "Jenny", fullName: "Realight Jenny", goingToOrFro: "Running an errand"  },
   {id: "7ZJ0OjgCTcWOClE4b44u", content: "Employee Velvet Crowe timed out for Running an errand", firstName: "Velvet", fullName: "Crowe Velvet", goingToOrFro: "Running an errand"  },
   {id: "9bR16Qd2MxjcJpnQS8Vl", content: "Employee Muzet Maxwell timed in for Returning from the errand", firstName: "Muzet", fullName: "Maxwell Muzet", goingToOrFro: "Returning from the errand"  },
   {id: "rcWd8QaD9kGrsrRFXFev", content: "Employee Jenny Realight timed in for Returning from the errand", firstName: "Jenny", fullName: "Realight Jenny", goingToOrFro: "Returning from the errand"  },
   {id: "UQ72Je64SLBe78SciVAt", content: "Employee Jenny Realight timed out for Running an errand", firstName: "Jenny", fullName: "Realight Jenny", goingToOrFro: "Running an errand"  }
  ];
  let result = new ReportGenerator().calculateSummary(scans);
  console.log(result);
});