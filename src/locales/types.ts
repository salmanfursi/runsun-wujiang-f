// Translation types for type safety
export interface TranslationKeys {
  navbar: {
    home: string;
    collections: string;
    sustainability: string;
    colorCards: string;
    contact: string;
    search: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
    exhibition: {
      title: string;
      subtitle: string;
      products: {
        topQuality: {
          title: string;
          desc: string;
        };
        wideRange: {
          title: string;
          desc: string;
        };
        sustainability: {
          title: string;
          desc: string;
        };
      };
    };
    videoSection: {
      title: string;
    };
    contactInfo: {
      mainOffice: string;
      phoneNumber: string;
      puyuanBranch: string;
      email: string;
    };
    contactForm: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  collection: {
    hero: {
      title: string;
      subtitle: string;
    };
    tabs: {
      springSummer: string;
      autumnWinter: string;
      newFabrics: string;
    };
    products: {
      lightweightCotton: {
        title: string;
        desc: string;
      };
      linenBlend: {
        title: string;
        desc: string;
      };
      pastelCollection: {
        title: string;
        desc: string;
      };
      woolBlend: {
        title: string;
        desc: string;
      };
      cashmereLuxe: {
        title: string;
        desc: string;
      };
      deepTones: {
        title: string;
        desc: string;
      };
      premiumKnit: {
        title: string;
        desc: string;
      };
      rayonShine: {
        title: string;
        desc: string;
      };
      patternedJacquard: {
        title: string;
        desc: string;
      };
    };
  };
  sustainability: {
    hero: {
      title: string;
      subtitle: string;
    };
    focus: string;
    topics: {
      commitments: {
        title: string;
        desc: string;
      };
      naturalFarm: {
        title: string;
        desc: string;
      };
      carbonNeutrality: {
        title: string;
        desc: string;
      };
      certifications: {
        title: string;
        desc: string;
      };
    };
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    offices: {
      mainFactory: string;
      puyuanBranch: string;
      koreaOffice: string;
      hongKongOffice: string;
      japanOffice: string;
      ukOffice: string;
      businessDept1: string;
      businessDept2: string;
      businessDept3: string;
    };
    locations: {
      title: string;
    };
    contactLabels: {
      contact: string;
    };
  };
  colorCard: {
    hero: {
      title: string;
      subtitle: string;
    };
    tabs: {
      colorCards: string;
      eColorCards: string;
      models: string;
    };
    products: {
      cashmere: {
        title: string;
        desc: string;
      };
      humanNature: {
        title: string;
        desc: string;
      };
      luxuryMaterial: {
        title: string;
        desc: string;
      };
      semiWorsted: {
        title: string;
        desc: string;
      };
      sustainableFunction: {
        title: string;
        desc: string;
      };
      traditionalWoolen: {
        title: string;
        desc: string;
      };
      bestseller: {
        title: string;
        desc: string;
      };
      runsun9: {
        title: string;
        desc: string;
      };
      runsunA: {
        title: string;
        desc: string;
      };
      runsunJ: {
        title: string;
        desc: string;
      };
      eColorPlaceholder: {
        title: string;
        desc: string;
      };
      model1: {
        title: string;
        desc: string;
      };
      model2: {
        title: string;
        desc: string;
      };
      model3: {
        title: string;
        desc: string;
      };
      model4: {
        title: string;
        desc: string;
      };
      model5: {
        title: string;
        desc: string;
      };
    };
  };
  footer: {
    company: {
      title: string;
      aboutUs: string;
      certifications: string;
      ourFactory: string;
      news: string;
    };
    products: {
      title: string;
      cashmereYarns: string;
      woolBlends: string;
      cottonLinen: string;
      ecoFibers: string;
      recycledMaterials: string;
      customSolutions: string;
    };
    resources: {
      title: string;
      blog: string;
      fabricCare: string;
      technicalSpecs: string;
      downloadBrochure: string;
      careers: string;
    };
    socialMedia: {
      wechat: string;
      xiaohongshu: string;
      linkedin: string;
      instagram: string;
    };
    copyright: string;
  };
  common: {
    loading: string;
    error: string;
    tryAgain: string;
  };
  language: {
    english: string;
    chinese: string;
  };
}