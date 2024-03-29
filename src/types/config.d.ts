export interface Config {
  gameTitle: string;
  images: {
    [key: string]: string;
  };
  layout: {
    backgrounds: {
      width: number;
      height: number;
    };
    minTextWidth: number;
    maxTextHeight: number;
  };
  screens: {
    [key: string]: {
      background: string;
      buttons: string[];
    };
  };
  buttons: {
    [key: string]: {
      enabled: boolean;
      background: string;
      position: {
        left: number;
        top: number;
        width: number;
        height: number;
      };
      action: string;
    };
  };
  skills: {
    [key: string]: SkillData;
  };
  scripts: string[];
}

export interface SkillData {
  name: string;
  description: string;
}
