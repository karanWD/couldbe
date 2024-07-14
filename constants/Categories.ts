export const Categories = {
  PROBLEM_SOLVING: 'Problem Solving',
  LEADER_SHIP_AND_PEPPLE_SKILLS: 'Leadership',
  SELF_MANAGMENT: 'Self Management',
  AI_AND_TECH: 'AI and Tech',
} as const

export type CategoriesType = keyof typeof Categories
