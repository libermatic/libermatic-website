const colorText = '#ff3860';
const colorShadow = '#2196f3';

console.log(
  `%cAchieving Singularity: %c${Math.round(Math.random() * 10000) /
    10000 *
    100}% `,
  `padding: 64px 0 0;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: ${colorText}`,
  `padding: 0 0 32px;
  font-size: 40px; font-weight: bold;
  text-shadow:
    1px 1px 0 ${colorShadow},
    -1px 1px 0 ${colorShadow},
    -1px -1px 0 ${colorShadow},
    1px -1px 0 ${colorShadow};`
);
