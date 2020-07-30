const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "Vous n'avez pas la permission d'utiliser cette commande",
    MISSED_ARGUMENTS: "Vous avez oublié des arguments, réessayez s'il vous plaît.",
    MAXIMUM_VALUE: "Vous ne pouvez pas utiliser plus de 3 caractères, symboles ou lettres dans votre préfixe, par exemple `rox!` n'est pas autorisée, mais `r!` est autorisé, et vous pouvez à nouveau ajouter 1 caractère",
    HELP_UNKNOW_COMMAND: (command) => `La commande \`!${command}\` n'existe pas`,
    LANG_NOT_FOUND: (lang, langs) => "La langue `" + lang + "` n'a pas été trouvé s'il vous plaît, définissez une langue valide " + langs,
    NOT_YOURSELF: "Vous ne pouvez pas vous bannir vous mêmes",
    NOT_IMG: `Vous n'avez pas envoyé d'image, essayez à nouveau, seulement \`.png\`,\`.jpg\` and \`.jpeg\` est pris en charge pour le moment, attendez une mise à jour s'il vous plaît`,
    NOT_GOLD_USER: "Vous n'êtes pas un utilisateur de Rox Gold",
    NOT_GOLD_SERVER: "Ce serveur n'a pas Rox Gold",
    IS_NAME_ALREADY: "Le serveur se nomme déjà à ce nom, veuillez essayer un autre",
    CHANNELS_ARGS: "Vous n'avez pas saisi de valeur valide, voici les valeurs disponibles: `logs`, `joinquit`",
    MENTION_CHANNEL: "Vous n'avez mentionné aucun salons",
    MENTION_ROLE: "Vous n'avez mentionné aucun rôle",
    ARGS_BACKGROUND: "L'argument, n'est pas valable, ceux qui existent sont `color`, and `img`",
    ARGS_BACKGROUND_1: "Vous devez entrer un code couleur valide, vous pouvez utiliser ce générateur: https://colors.rox.wtf",

    INVALID_ARGS_ROLES: "Vous devez saisir un type de rôle valide, les rôles disponibles à configurer sont: `adminRole`, `modRole` ou `autoRole`",
    INVALID_ARGS_TEXTS: "Vous devez entrer un type de texte valide, les textes disponibles à configurer sont: `joinText`, `quitText` ou `lvlUpText`",
    INVALID_ARGS_CHANNELS: "Vous devez entrer un type de chaîne valide, les chaînes disponibles à configurer sont is: `joinquit` ou `logs`",

    MISSED_TEXT: (prefix, type) => `Vous avez oublié(e) d'inserer un texte, vous pouvez ajoutées plusieurs tags dans votre texte, pour voir ceux qui sont disponibles pour ce texte utilisez \`${prefix}tags ${type}\``,

    /** SUCCESS **/
    UPDATED: "Vos modifications ont été sauvegardées avec succès",
    DOWNLANDED: (prefix) => `Bravo, vous avez défini votre arrière plan, pour le voir executer la commande \`${prefix}level\``,

    /** EMBED **/
    HELP_ADMIN_FIELD: "Administrateur",
    HELP_MOD_FIELD: "Modérateur",
    HELP_FUN_FIELD: "Fun",
    HELP_XP_FIELD: "Système d'XP",
    HELP_BASIC_FIELD: "Basique",

    WARN_TITLE: "Avertissements de ",
    WARNS_REASON_FIELD: "Raison: ",
    WARNS_MOD_FIELD: "Modérateur: ",

    HELP_CC_FIELD: (serverName) => "Commandes personnalisées (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Avantages pour l'utilisateur Gold",
    HELP_GOLD_SERVER_FIELD: "Avantages du serveur Gold",
    HELP_DESCRIPTION: (prefix) => `<:rox:737051270980042783> Pour mieux vous aider, vous pouvez utiliser la commande \`${prefix}help [command]\` pour obtenir les usages, les arguments, la description tout ce qui peut vous aider à utiliser le bot`,

    // Moderations commands messages
    PUNISH_Y: `Vous ne pouvez pas vous punir`,
    PU_NO_MENTION: "Veuillez entrer une mention d'utilisateur",
    PU_NO_REASON: "Veuillez indiquer une raison",
    PU_NO_ID: "Veuillez saisir une ID valide",
    PU_NO_ID_USER: (user) => `Cette ID n'est pas appropriée pour ${user}, veuillez regarder les avertissements de ${user} et voir la bonne ID`,
    PU_NO_USER: "Cet utilisateur n'existe pas dans ce serveur",
    PU_IMPOSSIBLE: "Je ne peux pas punir cet utilisateur",
    SUCCESS_BAN: (moderator,user, reason) => `${moderator} a interdit d'accéder au serveur à ${user} pour ${reason}`,
    SUCCESS_KICK: (moderator,user, reason) => `${moderator} a expulser du serveur ${user} pour ${reason}`,
    SUCCESS_WARN: (moderator,user, reason) => `${moderator} a avertit ${user} pour ${reason}`,
    SUCCESS_UNWARN: (moderator,user) => `${moderator} a retiré l'avertissement de ${user}`,
    SUCCESS_MUTE: (moderator,user, reason) => `${moderator} a mis au silence ${user} pour ${reason}`,
    SUCCESS_TMUTE: (moderator,user, reason, time) => `${moderator} à mis au silence temporairement ${user} pour ${reason} pendant ${time}`,
    SUCCESS_UNMUTE: (moderator,user) => `${moderator} a retirer la mise au silence de ${user}`,
    ALREADY_MUTE: (user) => `${user} déjà mise au silence`,
    NO_TIME: "Vous devez spécifier des chiffres, et non des lettres.",
    NO_MUTE: (user) => `${user} n'est actuellement pas réduite au silence`,

    BLACKLISTED: "Désolé, mais je ne peux pas vous laisser utiliser le bot. Vous êtes sur liste noire.",
    PICTURE_NOT_ALLOWED: `Votre photo n'est pas autorisée, veuillez choisir une autre`,
    CHECK_PICTURE: "Soyez patients, nous vérifions l'image",

    // FUN
    CHOICE_PROGRESS: "Je suis entrain de choisir... hmm est difficile",
    CHOICE_DONE: "Je réponds...",
    DOOR_OPEN: "La porte est grande ouverte pour vous",

    // SERVER
    LEVEL_SERVER_UP: (prefix) => `Niveau supérieur du serveur, vous pouvez voir le niveau du serveur avec \`${prefix}server\`, utilisez \`${prefix}server top\` pour voir votre niveau par rapport aux autres serveurs utilisant Rox`,

    // 8BALL
    DESCRIPTION: "Je vous dis la vérité!",
    ERR_QUESTION: "Vous devez entrer une question à me poser!",
    RESPONSE_1: "J'en suis certain.",
    RESPONSE_2: "C'est définitivement sûr.",
    RESPONSE_3: "Oui, définitivement.",
    RESPONSE_4: "Mieux vaut ne pas vous le dire maintenant.",
    RESPONSE_5: "Demandez moi cela plus tard.",
    RESPONSE_6: "N'y comptez pas.",
    RESPONSE_7: "Je ne le pense pas.",
    RESPONSE_8: "Mes sources disent que non.",
    RESPONSE_9: "Non.",
    RESPONSE_10: "Les perspectives ne sont pas si bonnes.",
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;