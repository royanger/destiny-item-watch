type BungieProfile = {
   membershipId: string;
   uniqueName: string;
   displayName: string;
   profilePicture: number;
   profileTheme: number;
   userTitle: number;
   successMessageFlags: string;
   isDeleted: boolean;
   about: string;
   firstAccess: '2016-11-21T04:22:22.868Z';
   lastUpdate: '2019-08-20T17:48:33.545Z';
   context: {
      isFollowing: boolean;
      ignoreStatus: {
         isIgnored: boolean;
         ignoreFlags: number;
      };
   };
   showActivity: boolean;
   locale: string;
   localeInheritDefault: boolean;
   showGroupMessaging: boolean;
   profilePicturePath: string;
   profileThemeName: string;
   userTitleDisplay: string;
   statusText: string;
   statusDate: string;
   blizzardDisplayName: string;
   steamDisplayName: string;
   twitchDisplayName: string;
   cachedBungieGlobalDisplayName: string;
   cachedBungieGlobalDisplayNameCode: 7180;
   destinyMemberships: BungieProfileMemberhips[];
   provider: 'bungie';
};

type BungieProfileMemberhips = {
   LastSeenDisplayName: string;
   LastSeenDisplayNameType: number;
   iconPath: string;
   crossSaveOverride: number;
   applicableMembershipTypes: [];
   isPublic: boolean;
   membershipType: number;
   membershipId: string;
   displayName: string;
   bungieGlobalDisplayName: string;
   bungieGlobalDisplayNameCode: number;
};

type CharacterFromProfile = {
   // baseCharacterLevel: number;
   characterId: string;
   classHash: number;
   // classType: number;
   emblemBackgroundPath: string;
   emblemColor: {
      red: number;
      green: number;
      blue: number;
      alpha: number;
   };
   // emblemHash: number;
   emblemPath: string;
   // genderHash: number;
   // genderType: number;
   light: number;
   // membershipId: string;
   // membershipType: number;
   raceHash: number;
   // raceType: number;
   // titleRecordHash: number;
};
