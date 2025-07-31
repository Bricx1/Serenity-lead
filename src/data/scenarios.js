export const scenarios = [
  {
    id: "party-invite",
    text: "You get invited to a party where alcohol may be present. What do you do?",
    choices: [
      { text: "Decline and suggest coffee", next: "coffee-success", score: +1 },
      { text: "Say maybe and see how you feel", next: "temptation", score: 0 },
      { text: "Agree to go", next: "relapse", score: -1 },
    ],
  },
  {
    id: "coffee-success",
    text: "Your friend agrees to coffee. You feel strong about your choice.",
    reflection: true,
  },
  {
    id: "temptation",
    text: "You went but left early, feeling conflicted.",
    reflection: true,
  },
  {
    id: "relapse",
    text: "You gave in. It's okay — time to reset and try again.",
    restart: true,
  },
];
