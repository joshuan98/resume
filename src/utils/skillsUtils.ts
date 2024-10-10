export const getSkillLevelColor = (level: string) => {
  switch (level) {
    case 'proficient':
      return {
        bgText: 'bg-lime-500',
        bgBar: 'bg-lime-700',
        width: '80%',
      };
    case 'intermediate':
      return {
        bgText: 'bg-blue-500',
        bgBar: 'bg-blue-700',
        width: '50%',
      };
    case 'basic':
      return {
        bgText: 'bg-red-500',
        bgBar: 'bg-red-700',
        width: '30%',
      };
    default:
      return {
        bgText: 'bg-gray-500',
        bgBar: 'bg-gray-700',
        width: '0%',
      };
  }
};