/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: { input: any; output: any; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type Ally = Entry & _Node & {
  __typename?: 'Ally';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  benefit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<AllyLinkingCollections>;
  location?: Maybe<Location>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyBenefitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/ally) */
export type AllyPhoneArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AllyCollection = {
  __typename?: 'AllyCollection';
  items: Array<Maybe<Ally>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AllyFilter = {
  AND?: InputMaybe<Array<InputMaybe<AllyFilter>>>;
  Category?: InputMaybe<Scalars['String']['input']>;
  Category_contains?: InputMaybe<Scalars['String']['input']>;
  Category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  Category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Category_not?: InputMaybe<Scalars['String']['input']>;
  Category_not_contains?: InputMaybe<Scalars['String']['input']>;
  Category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  OR?: InputMaybe<Array<InputMaybe<AllyFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefit?: InputMaybe<Scalars['String']['input']>;
  benefit_contains?: InputMaybe<Scalars['String']['input']>;
  benefit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  benefit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  benefit_not?: InputMaybe<Scalars['String']['input']>;
  benefit_not_contains?: InputMaybe<Scalars['String']['input']>;
  benefit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  location_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phone_not?: InputMaybe<Scalars['String']['input']>;
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AllyLinkingCollections = {
  __typename?: 'AllyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AllyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AllyOrder {
  CategoryAsc = 'Category_ASC',
  CategoryDesc = 'Category_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  BenefitAsc = 'benefit_ASC',
  BenefitDesc = 'benefit_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  allyCollection?: Maybe<AllyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  huntersBlogCollection?: Maybe<HuntersBlogCollection>;
};


export type AssetLinkingCollectionsAllyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHuntersBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlog = Entry & _Node & {
  __typename?: 'HuntersBlog';
  _id: Scalars['ID']['output'];
  authorMiddleImage?: Maybe<Scalars['String']['output']>;
  bottomImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  headerImage?: Maybe<Asset>;
  inferiorParagraph?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HuntersBlogLinkingCollections>;
  middleImage?: Maybe<Asset>;
  postWritter?: Maybe<Scalars['String']['output']>;
  superiorParagraph?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogAuthorMiddleImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogBottomImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogHeaderImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogInferiorParagraphArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogMiddleImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogPostWritterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogSuperiorParagraphArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/hunters-blog) */
export type HuntersBlogTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HuntersBlogCollection = {
  __typename?: 'HuntersBlogCollection';
  items: Array<Maybe<HuntersBlog>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HuntersBlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<HuntersBlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HuntersBlogFilter>>>;
  authorMiddleImage?: InputMaybe<Scalars['String']['input']>;
  authorMiddleImage_contains?: InputMaybe<Scalars['String']['input']>;
  authorMiddleImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  authorMiddleImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authorMiddleImage_not?: InputMaybe<Scalars['String']['input']>;
  authorMiddleImage_not_contains?: InputMaybe<Scalars['String']['input']>;
  authorMiddleImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bottomImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headerImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  inferiorParagraph?: InputMaybe<Scalars['String']['input']>;
  inferiorParagraph_contains?: InputMaybe<Scalars['String']['input']>;
  inferiorParagraph_exists?: InputMaybe<Scalars['Boolean']['input']>;
  inferiorParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inferiorParagraph_not?: InputMaybe<Scalars['String']['input']>;
  inferiorParagraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  inferiorParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  middleImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postWritter?: InputMaybe<Scalars['String']['input']>;
  postWritter_contains?: InputMaybe<Scalars['String']['input']>;
  postWritter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postWritter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postWritter_not?: InputMaybe<Scalars['String']['input']>;
  postWritter_not_contains?: InputMaybe<Scalars['String']['input']>;
  postWritter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  superiorParagraph?: InputMaybe<Scalars['String']['input']>;
  superiorParagraph_contains?: InputMaybe<Scalars['String']['input']>;
  superiorParagraph_exists?: InputMaybe<Scalars['Boolean']['input']>;
  superiorParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  superiorParagraph_not?: InputMaybe<Scalars['String']['input']>;
  superiorParagraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  superiorParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HuntersBlogLinkingCollections = {
  __typename?: 'HuntersBlogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HuntersBlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HuntersBlogOrder {
  AuthorMiddleImageAsc = 'authorMiddleImage_ASC',
  AuthorMiddleImageDesc = 'authorMiddleImage_DESC',
  PostWritterAsc = 'postWritter_ASC',
  PostWritterDesc = 'postWritter_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  ally?: Maybe<Ally>;
  allyCollection?: Maybe<AllyCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  huntersBlog?: Maybe<HuntersBlog>;
  huntersBlogCollection?: Maybe<HuntersBlogCollection>;
  textInnerAreas?: Maybe<TextInnerAreas>;
  textInnerAreasCollection?: Maybe<TextInnerAreasCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAllyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAllyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AllyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AllyFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryHuntersBlogArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHuntersBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HuntersBlogOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HuntersBlogFilter>;
};


export type QueryTextInnerAreasArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextInnerAreasCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextInnerAreasOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextInnerAreasFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/textInnerAreas) */
export type TextInnerAreas = Entry & _Node & {
  __typename?: 'TextInnerAreas';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TextInnerAreasLinkingCollections>;
  sys: Sys;
  textInnerArea?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/textInnerAreas) */
export type TextInnerAreasLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/1pjko1eowomd/content_types/textInnerAreas) */
export type TextInnerAreasTextInnerAreaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TextInnerAreasCollection = {
  __typename?: 'TextInnerAreasCollection';
  items: Array<Maybe<TextInnerAreas>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextInnerAreasFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextInnerAreasFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextInnerAreasFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  textInnerArea?: InputMaybe<Scalars['String']['input']>;
  textInnerArea_contains?: InputMaybe<Scalars['String']['input']>;
  textInnerArea_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textInnerArea_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textInnerArea_not?: InputMaybe<Scalars['String']['input']>;
  textInnerArea_not_contains?: InputMaybe<Scalars['String']['input']>;
  textInnerArea_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TextInnerAreasLinkingCollections = {
  __typename?: 'TextInnerAreasLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TextInnerAreasLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextInnerAreasOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type AlliancesDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type AlliancesDataQuery = { __typename?: 'Query', allyCollection?: { __typename?: 'AllyCollection', items: Array<{ __typename?: 'Ally', name?: string | null, description?: string | null, benefit?: string | null, phone?: string | null, address?: string | null, category?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', url?: string | null } | null, image?: { __typename?: 'Asset', url?: string | null } | null, location?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null } | null> } | null };

export type HuntersBlogSimpleQueryVariables = Exact<{ [key: string]: never; }>;


export type HuntersBlogSimpleQuery = { __typename?: 'Query', huntersBlogCollection?: { __typename?: 'HuntersBlogCollection', items: Array<{ __typename?: 'HuntersBlog', title?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type HuntersBlogDataNoLocaleQueryVariables = Exact<{ [key: string]: never; }>;


export type HuntersBlogDataNoLocaleQuery = { __typename?: 'Query', huntersBlogCollection?: { __typename?: 'HuntersBlogCollection', items: Array<{ __typename?: 'HuntersBlog', title?: string | null, postWritter?: string | null, superiorParagraph?: string | null, authorMiddleImage?: string | null, inferiorParagraph?: string | null, sys: { __typename?: 'Sys', id: string }, headerImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, middleImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, bottomImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null } | null> } | null };

export type HuntersBlogDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type HuntersBlogDataQuery = { __typename?: 'Query', huntersBlogCollection?: { __typename?: 'HuntersBlogCollection', items: Array<{ __typename?: 'HuntersBlog', title?: string | null, postWritter?: string | null, superiorParagraph?: string | null, authorMiddleImage?: string | null, inferiorParagraph?: string | null, sys: { __typename?: 'Sys', id: string }, headerImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, middleImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, bottomImage?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null } | null> } | null };

export type TextInnerAreasDataQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type TextInnerAreasDataQuery = { __typename?: 'Query', textInnerAreasCollection?: { __typename?: 'TextInnerAreasCollection', items: Array<{ __typename?: 'TextInnerAreas', textInnerArea?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };


export const AlliancesDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AlliancesData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allyCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"benefit"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]} as unknown as DocumentNode<AlliancesDataQuery, AlliancesDataQueryVariables>;
export const HuntersBlogSimpleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HuntersBlogSimple"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"huntersBlogCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<HuntersBlogSimpleQuery, HuntersBlogSimpleQueryVariables>;
export const HuntersBlogDataNoLocaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HuntersBlogDataNoLocale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"huntersBlogCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postWritter"}},{"kind":"Field","name":{"kind":"Name","value":"headerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superiorParagraph"}},{"kind":"Field","name":{"kind":"Name","value":"middleImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorMiddleImage"}},{"kind":"Field","name":{"kind":"Name","value":"inferiorParagraph"}},{"kind":"Field","name":{"kind":"Name","value":"bottomImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HuntersBlogDataNoLocaleQuery, HuntersBlogDataNoLocaleQueryVariables>;
export const HuntersBlogDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HuntersBlogData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"huntersBlogCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"postWritter"}},{"kind":"Field","name":{"kind":"Name","value":"headerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"superiorParagraph"}},{"kind":"Field","name":{"kind":"Name","value":"middleImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorMiddleImage"}},{"kind":"Field","name":{"kind":"Name","value":"inferiorParagraph"}},{"kind":"Field","name":{"kind":"Name","value":"bottomImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HuntersBlogDataQuery, HuntersBlogDataQueryVariables>;
export const TextInnerAreasDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TextInnerAreasData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textInnerAreasCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textInnerArea"}}]}}]}}]}}]} as unknown as DocumentNode<TextInnerAreasDataQuery, TextInnerAreasDataQueryVariables>;