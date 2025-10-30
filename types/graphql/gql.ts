/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\tquery AlliancesData($locale: String) {\n\t\tallyCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tbenefit\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tphone\n\t\t\t\taddress\n\t\t\t\tlocation {\n\t\t\t\t\tlat\n\t\t\t\t\tlon\n\t\t\t\t}\n\t\t\t\tcategory\n\t\t\t}\n\t\t}\n\t}\n": typeof types.AlliancesDataDocument,
    "\n\tquery HuntersBlogSimple {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": typeof types.HuntersBlogSimpleDocument,
    "\n\tquery HuntersBlogDataNoLocale {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.HuntersBlogDataNoLocaleDocument,
    "\n\tquery HuntersBlogData($locale: String) {\n\t\thuntersBlogCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.HuntersBlogDataDocument,
    "\n\tquery TextInnerAreasData($locale: String) {\n\t\ttextInnerAreasCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttextInnerArea\n\t\t\t}\n\t\t}\n\t}\n": typeof types.TextInnerAreasDataDocument,
};
const documents: Documents = {
    "\n\tquery AlliancesData($locale: String) {\n\t\tallyCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tbenefit\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tphone\n\t\t\t\taddress\n\t\t\t\tlocation {\n\t\t\t\t\tlat\n\t\t\t\t\tlon\n\t\t\t\t}\n\t\t\t\tcategory\n\t\t\t}\n\t\t}\n\t}\n": types.AlliancesDataDocument,
    "\n\tquery HuntersBlogSimple {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": types.HuntersBlogSimpleDocument,
    "\n\tquery HuntersBlogDataNoLocale {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.HuntersBlogDataNoLocaleDocument,
    "\n\tquery HuntersBlogData($locale: String) {\n\t\thuntersBlogCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.HuntersBlogDataDocument,
    "\n\tquery TextInnerAreasData($locale: String) {\n\t\ttextInnerAreasCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttextInnerArea\n\t\t\t}\n\t\t}\n\t}\n": types.TextInnerAreasDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery AlliancesData($locale: String) {\n\t\tallyCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tbenefit\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tphone\n\t\t\t\taddress\n\t\t\t\tlocation {\n\t\t\t\t\tlat\n\t\t\t\t\tlon\n\t\t\t\t}\n\t\t\t\tcategory\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery AlliancesData($locale: String) {\n\t\tallyCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tbenefit\n\t\t\t\tlogo {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\timage {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t\tphone\n\t\t\t\taddress\n\t\t\t\tlocation {\n\t\t\t\t\tlat\n\t\t\t\t\tlon\n\t\t\t\t}\n\t\t\t\tcategory\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery HuntersBlogSimple {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery HuntersBlogSimple {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery HuntersBlogDataNoLocale {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery HuntersBlogDataNoLocale {\n\t\thuntersBlogCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery HuntersBlogData($locale: String) {\n\t\thuntersBlogCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery HuntersBlogData($locale: String) {\n\t\thuntersBlogCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttitle\n\t\t\t\tpostWritter\n\t\t\t\theaderImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tsuperiorParagraph\n\t\t\t\tmiddleImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t\tauthorMiddleImage\n\t\t\t\tinferiorParagraph\n\t\t\t\tbottomImage {\n\t\t\t\t\turl\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery TextInnerAreasData($locale: String) {\n\t\ttextInnerAreasCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttextInnerArea\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery TextInnerAreasData($locale: String) {\n\t\ttextInnerAreasCollection(locale: $locale) {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\ttextInnerArea\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;