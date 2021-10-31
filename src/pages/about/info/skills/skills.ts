import type { SkillsListProps } from '../../skills/skills';
import { SkillsMessages as Messages } from './skills.messages';

export const SkillsLists: SkillsListProps[] = [
  {
    label: 'proficient',
    skills: [
      Messages.Python(),
      Messages.C(),
      Messages.Java(),
      Messages.Html(),
      Messages.Css(),
      Messages.JavaScript(),
      Messages.React(),
      Messages.MongoDb(),
      Messages.MySql(),
      Messages.Git(),
    ],
  },
  {
    label: 'familiar',
    skills: [
      Messages.Haskell(),
      Messages.Redux(),
      Messages.MobX(),
      Messages.Prolog(),
      Messages.Neo4j(),
      Messages.Firebase(),
      Messages.Swift(),
      Messages.MachineLearning(),
      Messages.ArtificialIntelligence(),
    ],
  },
];
