export const dict = {
    en: {
        "fold.title": "Collapsed sub-items",
    },
    zh: {
        "fold.title": "折叠子项",
    }
} as const;

export function i18n(key: keyof typeof dict.en) {
    return dict[userLanguage()][key];
}

function userLanguage() {
    if (language().startsWith("zh")) {
        return "zh";
    } else {
        return "en";
    }
}

function language() {
    if (navigator.language) {
        return navigator.language;
    } else {
        return "en";
    }
}
