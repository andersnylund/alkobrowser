// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  product: (where?: ProductWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nimi_ASC"
  | "nimi_DESC"
  | "valmistaja_ASC"
  | "valmistaja_DESC"
  | "pullokoko_ASC"
  | "pullokoko_DESC"
  | "hinta_ASC"
  | "hinta_DESC"
  | "litrahinta_ASC"
  | "litrahinta_DESC"
  | "uutuus_ASC"
  | "uutuus_DESC"
  | "hinnastojarjestys_ASC"
  | "hinnastojarjestys_DESC"
  | "tyyppi_ASC"
  | "tyyppi_DESC"
  | "erityisryhma_ASC"
  | "erityisryhma_DESC"
  | "oluttyyppi_ASC"
  | "oluttyyppi_DESC"
  | "valmistusmaa_ASC"
  | "valmistusmaa_DESC"
  | "alue_ASC"
  | "alue_DESC"
  | "vuosikerta_ASC"
  | "vuosikerta_DESC"
  | "etikettimerkintoja_ASC"
  | "etikettimerkintoja_DESC"
  | "huomautus_ASC"
  | "huomautus_DESC"
  | "rypaleet_ASC"
  | "rypaleet_DESC"
  | "luonnehdinta_ASC"
  | "luonnehdinta_DESC"
  | "pakkaustyyppi_ASC"
  | "pakkaustyyppi_DESC"
  | "suljentatyyppi_ASC"
  | "suljentatyyppi_DESC"
  | "alkoholiprosentti_ASC"
  | "alkoholiprosentti_DESC"
  | "hapot_ASC"
  | "hapot_DESC"
  | "sokeri_ASC"
  | "sokeri_DESC"
  | "kantavierreprosentti_ASC"
  | "kantavierreprosentti_DESC"
  | "vari_ASC"
  | "vari_DESC"
  | "ebc_ASC"
  | "ebc_DESC"
  | "katkerot_ASC"
  | "katkerot_DESC"
  | "ebu_ASC"
  | "ebu_DESC"
  | "energia_ASC"
  | "energia_DESC"
  | "valikoima_ASC"
  | "valikoima_DESC"
  | "alkoholilitrahinta_ASC"
  | "alkoholilitrahinta_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  nimi?: Maybe<String>;
  valmistaja?: Maybe<String>;
  pullokoko?: Maybe<Float>;
  hinta?: Maybe<Float>;
  litrahinta?: Maybe<String>;
  uutuus?: Maybe<String>;
  hinnastojarjestys?: Maybe<String>;
  tyyppi?: Maybe<String>;
  erityisryhma?: Maybe<String>;
  oluttyyppi?: Maybe<String>;
  valmistusmaa?: Maybe<String>;
  alue?: Maybe<String>;
  vuosikerta?: Maybe<Int>;
  etikettimerkintoja?: Maybe<String>;
  huomautus?: Maybe<String>;
  rypaleet?: Maybe<String>;
  luonnehdinta?: Maybe<String>;
  pakkaustyyppi?: Maybe<String>;
  suljentatyyppi?: Maybe<String>;
  alkoholiprosentti?: Maybe<Float>;
  hapot?: Maybe<Float>;
  sokeri?: Maybe<Float>;
  kantavierreprosentti?: Maybe<Float>;
  vari?: Maybe<String>;
  ebc?: Maybe<String>;
  katkerot?: Maybe<String>;
  ebu?: Maybe<String>;
  energia?: Maybe<Float>;
  valikoima?: Maybe<String>;
  alkoholilitrahinta?: Maybe<Float>;
}

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  nimi?: Maybe<String>;
  nimi_not?: Maybe<String>;
  nimi_in?: Maybe<String[] | String>;
  nimi_not_in?: Maybe<String[] | String>;
  nimi_lt?: Maybe<String>;
  nimi_lte?: Maybe<String>;
  nimi_gt?: Maybe<String>;
  nimi_gte?: Maybe<String>;
  nimi_contains?: Maybe<String>;
  nimi_not_contains?: Maybe<String>;
  nimi_starts_with?: Maybe<String>;
  nimi_not_starts_with?: Maybe<String>;
  nimi_ends_with?: Maybe<String>;
  nimi_not_ends_with?: Maybe<String>;
  valmistaja?: Maybe<String>;
  valmistaja_not?: Maybe<String>;
  valmistaja_in?: Maybe<String[] | String>;
  valmistaja_not_in?: Maybe<String[] | String>;
  valmistaja_lt?: Maybe<String>;
  valmistaja_lte?: Maybe<String>;
  valmistaja_gt?: Maybe<String>;
  valmistaja_gte?: Maybe<String>;
  valmistaja_contains?: Maybe<String>;
  valmistaja_not_contains?: Maybe<String>;
  valmistaja_starts_with?: Maybe<String>;
  valmistaja_not_starts_with?: Maybe<String>;
  valmistaja_ends_with?: Maybe<String>;
  valmistaja_not_ends_with?: Maybe<String>;
  pullokoko?: Maybe<Float>;
  pullokoko_not?: Maybe<Float>;
  pullokoko_in?: Maybe<Float[] | Float>;
  pullokoko_not_in?: Maybe<Float[] | Float>;
  pullokoko_lt?: Maybe<Float>;
  pullokoko_lte?: Maybe<Float>;
  pullokoko_gt?: Maybe<Float>;
  pullokoko_gte?: Maybe<Float>;
  hinta?: Maybe<Float>;
  hinta_not?: Maybe<Float>;
  hinta_in?: Maybe<Float[] | Float>;
  hinta_not_in?: Maybe<Float[] | Float>;
  hinta_lt?: Maybe<Float>;
  hinta_lte?: Maybe<Float>;
  hinta_gt?: Maybe<Float>;
  hinta_gte?: Maybe<Float>;
  litrahinta?: Maybe<String>;
  litrahinta_not?: Maybe<String>;
  litrahinta_in?: Maybe<String[] | String>;
  litrahinta_not_in?: Maybe<String[] | String>;
  litrahinta_lt?: Maybe<String>;
  litrahinta_lte?: Maybe<String>;
  litrahinta_gt?: Maybe<String>;
  litrahinta_gte?: Maybe<String>;
  litrahinta_contains?: Maybe<String>;
  litrahinta_not_contains?: Maybe<String>;
  litrahinta_starts_with?: Maybe<String>;
  litrahinta_not_starts_with?: Maybe<String>;
  litrahinta_ends_with?: Maybe<String>;
  litrahinta_not_ends_with?: Maybe<String>;
  uutuus?: Maybe<String>;
  uutuus_not?: Maybe<String>;
  uutuus_in?: Maybe<String[] | String>;
  uutuus_not_in?: Maybe<String[] | String>;
  uutuus_lt?: Maybe<String>;
  uutuus_lte?: Maybe<String>;
  uutuus_gt?: Maybe<String>;
  uutuus_gte?: Maybe<String>;
  uutuus_contains?: Maybe<String>;
  uutuus_not_contains?: Maybe<String>;
  uutuus_starts_with?: Maybe<String>;
  uutuus_not_starts_with?: Maybe<String>;
  uutuus_ends_with?: Maybe<String>;
  uutuus_not_ends_with?: Maybe<String>;
  hinnastojarjestys?: Maybe<String>;
  hinnastojarjestys_not?: Maybe<String>;
  hinnastojarjestys_in?: Maybe<String[] | String>;
  hinnastojarjestys_not_in?: Maybe<String[] | String>;
  hinnastojarjestys_lt?: Maybe<String>;
  hinnastojarjestys_lte?: Maybe<String>;
  hinnastojarjestys_gt?: Maybe<String>;
  hinnastojarjestys_gte?: Maybe<String>;
  hinnastojarjestys_contains?: Maybe<String>;
  hinnastojarjestys_not_contains?: Maybe<String>;
  hinnastojarjestys_starts_with?: Maybe<String>;
  hinnastojarjestys_not_starts_with?: Maybe<String>;
  hinnastojarjestys_ends_with?: Maybe<String>;
  hinnastojarjestys_not_ends_with?: Maybe<String>;
  tyyppi?: Maybe<String>;
  tyyppi_not?: Maybe<String>;
  tyyppi_in?: Maybe<String[] | String>;
  tyyppi_not_in?: Maybe<String[] | String>;
  tyyppi_lt?: Maybe<String>;
  tyyppi_lte?: Maybe<String>;
  tyyppi_gt?: Maybe<String>;
  tyyppi_gte?: Maybe<String>;
  tyyppi_contains?: Maybe<String>;
  tyyppi_not_contains?: Maybe<String>;
  tyyppi_starts_with?: Maybe<String>;
  tyyppi_not_starts_with?: Maybe<String>;
  tyyppi_ends_with?: Maybe<String>;
  tyyppi_not_ends_with?: Maybe<String>;
  erityisryhma?: Maybe<String>;
  erityisryhma_not?: Maybe<String>;
  erityisryhma_in?: Maybe<String[] | String>;
  erityisryhma_not_in?: Maybe<String[] | String>;
  erityisryhma_lt?: Maybe<String>;
  erityisryhma_lte?: Maybe<String>;
  erityisryhma_gt?: Maybe<String>;
  erityisryhma_gte?: Maybe<String>;
  erityisryhma_contains?: Maybe<String>;
  erityisryhma_not_contains?: Maybe<String>;
  erityisryhma_starts_with?: Maybe<String>;
  erityisryhma_not_starts_with?: Maybe<String>;
  erityisryhma_ends_with?: Maybe<String>;
  erityisryhma_not_ends_with?: Maybe<String>;
  oluttyyppi?: Maybe<String>;
  oluttyyppi_not?: Maybe<String>;
  oluttyyppi_in?: Maybe<String[] | String>;
  oluttyyppi_not_in?: Maybe<String[] | String>;
  oluttyyppi_lt?: Maybe<String>;
  oluttyyppi_lte?: Maybe<String>;
  oluttyyppi_gt?: Maybe<String>;
  oluttyyppi_gte?: Maybe<String>;
  oluttyyppi_contains?: Maybe<String>;
  oluttyyppi_not_contains?: Maybe<String>;
  oluttyyppi_starts_with?: Maybe<String>;
  oluttyyppi_not_starts_with?: Maybe<String>;
  oluttyyppi_ends_with?: Maybe<String>;
  oluttyyppi_not_ends_with?: Maybe<String>;
  valmistusmaa?: Maybe<String>;
  valmistusmaa_not?: Maybe<String>;
  valmistusmaa_in?: Maybe<String[] | String>;
  valmistusmaa_not_in?: Maybe<String[] | String>;
  valmistusmaa_lt?: Maybe<String>;
  valmistusmaa_lte?: Maybe<String>;
  valmistusmaa_gt?: Maybe<String>;
  valmistusmaa_gte?: Maybe<String>;
  valmistusmaa_contains?: Maybe<String>;
  valmistusmaa_not_contains?: Maybe<String>;
  valmistusmaa_starts_with?: Maybe<String>;
  valmistusmaa_not_starts_with?: Maybe<String>;
  valmistusmaa_ends_with?: Maybe<String>;
  valmistusmaa_not_ends_with?: Maybe<String>;
  alue?: Maybe<String>;
  alue_not?: Maybe<String>;
  alue_in?: Maybe<String[] | String>;
  alue_not_in?: Maybe<String[] | String>;
  alue_lt?: Maybe<String>;
  alue_lte?: Maybe<String>;
  alue_gt?: Maybe<String>;
  alue_gte?: Maybe<String>;
  alue_contains?: Maybe<String>;
  alue_not_contains?: Maybe<String>;
  alue_starts_with?: Maybe<String>;
  alue_not_starts_with?: Maybe<String>;
  alue_ends_with?: Maybe<String>;
  alue_not_ends_with?: Maybe<String>;
  vuosikerta?: Maybe<Int>;
  vuosikerta_not?: Maybe<Int>;
  vuosikerta_in?: Maybe<Int[] | Int>;
  vuosikerta_not_in?: Maybe<Int[] | Int>;
  vuosikerta_lt?: Maybe<Int>;
  vuosikerta_lte?: Maybe<Int>;
  vuosikerta_gt?: Maybe<Int>;
  vuosikerta_gte?: Maybe<Int>;
  etikettimerkintoja?: Maybe<String>;
  etikettimerkintoja_not?: Maybe<String>;
  etikettimerkintoja_in?: Maybe<String[] | String>;
  etikettimerkintoja_not_in?: Maybe<String[] | String>;
  etikettimerkintoja_lt?: Maybe<String>;
  etikettimerkintoja_lte?: Maybe<String>;
  etikettimerkintoja_gt?: Maybe<String>;
  etikettimerkintoja_gte?: Maybe<String>;
  etikettimerkintoja_contains?: Maybe<String>;
  etikettimerkintoja_not_contains?: Maybe<String>;
  etikettimerkintoja_starts_with?: Maybe<String>;
  etikettimerkintoja_not_starts_with?: Maybe<String>;
  etikettimerkintoja_ends_with?: Maybe<String>;
  etikettimerkintoja_not_ends_with?: Maybe<String>;
  huomautus?: Maybe<String>;
  huomautus_not?: Maybe<String>;
  huomautus_in?: Maybe<String[] | String>;
  huomautus_not_in?: Maybe<String[] | String>;
  huomautus_lt?: Maybe<String>;
  huomautus_lte?: Maybe<String>;
  huomautus_gt?: Maybe<String>;
  huomautus_gte?: Maybe<String>;
  huomautus_contains?: Maybe<String>;
  huomautus_not_contains?: Maybe<String>;
  huomautus_starts_with?: Maybe<String>;
  huomautus_not_starts_with?: Maybe<String>;
  huomautus_ends_with?: Maybe<String>;
  huomautus_not_ends_with?: Maybe<String>;
  rypaleet?: Maybe<String>;
  rypaleet_not?: Maybe<String>;
  rypaleet_in?: Maybe<String[] | String>;
  rypaleet_not_in?: Maybe<String[] | String>;
  rypaleet_lt?: Maybe<String>;
  rypaleet_lte?: Maybe<String>;
  rypaleet_gt?: Maybe<String>;
  rypaleet_gte?: Maybe<String>;
  rypaleet_contains?: Maybe<String>;
  rypaleet_not_contains?: Maybe<String>;
  rypaleet_starts_with?: Maybe<String>;
  rypaleet_not_starts_with?: Maybe<String>;
  rypaleet_ends_with?: Maybe<String>;
  rypaleet_not_ends_with?: Maybe<String>;
  luonnehdinta?: Maybe<String>;
  luonnehdinta_not?: Maybe<String>;
  luonnehdinta_in?: Maybe<String[] | String>;
  luonnehdinta_not_in?: Maybe<String[] | String>;
  luonnehdinta_lt?: Maybe<String>;
  luonnehdinta_lte?: Maybe<String>;
  luonnehdinta_gt?: Maybe<String>;
  luonnehdinta_gte?: Maybe<String>;
  luonnehdinta_contains?: Maybe<String>;
  luonnehdinta_not_contains?: Maybe<String>;
  luonnehdinta_starts_with?: Maybe<String>;
  luonnehdinta_not_starts_with?: Maybe<String>;
  luonnehdinta_ends_with?: Maybe<String>;
  luonnehdinta_not_ends_with?: Maybe<String>;
  pakkaustyyppi?: Maybe<String>;
  pakkaustyyppi_not?: Maybe<String>;
  pakkaustyyppi_in?: Maybe<String[] | String>;
  pakkaustyyppi_not_in?: Maybe<String[] | String>;
  pakkaustyyppi_lt?: Maybe<String>;
  pakkaustyyppi_lte?: Maybe<String>;
  pakkaustyyppi_gt?: Maybe<String>;
  pakkaustyyppi_gte?: Maybe<String>;
  pakkaustyyppi_contains?: Maybe<String>;
  pakkaustyyppi_not_contains?: Maybe<String>;
  pakkaustyyppi_starts_with?: Maybe<String>;
  pakkaustyyppi_not_starts_with?: Maybe<String>;
  pakkaustyyppi_ends_with?: Maybe<String>;
  pakkaustyyppi_not_ends_with?: Maybe<String>;
  suljentatyyppi?: Maybe<String>;
  suljentatyyppi_not?: Maybe<String>;
  suljentatyyppi_in?: Maybe<String[] | String>;
  suljentatyyppi_not_in?: Maybe<String[] | String>;
  suljentatyyppi_lt?: Maybe<String>;
  suljentatyyppi_lte?: Maybe<String>;
  suljentatyyppi_gt?: Maybe<String>;
  suljentatyyppi_gte?: Maybe<String>;
  suljentatyyppi_contains?: Maybe<String>;
  suljentatyyppi_not_contains?: Maybe<String>;
  suljentatyyppi_starts_with?: Maybe<String>;
  suljentatyyppi_not_starts_with?: Maybe<String>;
  suljentatyyppi_ends_with?: Maybe<String>;
  suljentatyyppi_not_ends_with?: Maybe<String>;
  alkoholiprosentti?: Maybe<Float>;
  alkoholiprosentti_not?: Maybe<Float>;
  alkoholiprosentti_in?: Maybe<Float[] | Float>;
  alkoholiprosentti_not_in?: Maybe<Float[] | Float>;
  alkoholiprosentti_lt?: Maybe<Float>;
  alkoholiprosentti_lte?: Maybe<Float>;
  alkoholiprosentti_gt?: Maybe<Float>;
  alkoholiprosentti_gte?: Maybe<Float>;
  hapot?: Maybe<Float>;
  hapot_not?: Maybe<Float>;
  hapot_in?: Maybe<Float[] | Float>;
  hapot_not_in?: Maybe<Float[] | Float>;
  hapot_lt?: Maybe<Float>;
  hapot_lte?: Maybe<Float>;
  hapot_gt?: Maybe<Float>;
  hapot_gte?: Maybe<Float>;
  sokeri?: Maybe<Float>;
  sokeri_not?: Maybe<Float>;
  sokeri_in?: Maybe<Float[] | Float>;
  sokeri_not_in?: Maybe<Float[] | Float>;
  sokeri_lt?: Maybe<Float>;
  sokeri_lte?: Maybe<Float>;
  sokeri_gt?: Maybe<Float>;
  sokeri_gte?: Maybe<Float>;
  kantavierreprosentti?: Maybe<Float>;
  kantavierreprosentti_not?: Maybe<Float>;
  kantavierreprosentti_in?: Maybe<Float[] | Float>;
  kantavierreprosentti_not_in?: Maybe<Float[] | Float>;
  kantavierreprosentti_lt?: Maybe<Float>;
  kantavierreprosentti_lte?: Maybe<Float>;
  kantavierreprosentti_gt?: Maybe<Float>;
  kantavierreprosentti_gte?: Maybe<Float>;
  vari?: Maybe<String>;
  vari_not?: Maybe<String>;
  vari_in?: Maybe<String[] | String>;
  vari_not_in?: Maybe<String[] | String>;
  vari_lt?: Maybe<String>;
  vari_lte?: Maybe<String>;
  vari_gt?: Maybe<String>;
  vari_gte?: Maybe<String>;
  vari_contains?: Maybe<String>;
  vari_not_contains?: Maybe<String>;
  vari_starts_with?: Maybe<String>;
  vari_not_starts_with?: Maybe<String>;
  vari_ends_with?: Maybe<String>;
  vari_not_ends_with?: Maybe<String>;
  ebc?: Maybe<String>;
  ebc_not?: Maybe<String>;
  ebc_in?: Maybe<String[] | String>;
  ebc_not_in?: Maybe<String[] | String>;
  ebc_lt?: Maybe<String>;
  ebc_lte?: Maybe<String>;
  ebc_gt?: Maybe<String>;
  ebc_gte?: Maybe<String>;
  ebc_contains?: Maybe<String>;
  ebc_not_contains?: Maybe<String>;
  ebc_starts_with?: Maybe<String>;
  ebc_not_starts_with?: Maybe<String>;
  ebc_ends_with?: Maybe<String>;
  ebc_not_ends_with?: Maybe<String>;
  katkerot?: Maybe<String>;
  katkerot_not?: Maybe<String>;
  katkerot_in?: Maybe<String[] | String>;
  katkerot_not_in?: Maybe<String[] | String>;
  katkerot_lt?: Maybe<String>;
  katkerot_lte?: Maybe<String>;
  katkerot_gt?: Maybe<String>;
  katkerot_gte?: Maybe<String>;
  katkerot_contains?: Maybe<String>;
  katkerot_not_contains?: Maybe<String>;
  katkerot_starts_with?: Maybe<String>;
  katkerot_not_starts_with?: Maybe<String>;
  katkerot_ends_with?: Maybe<String>;
  katkerot_not_ends_with?: Maybe<String>;
  ebu?: Maybe<String>;
  ebu_not?: Maybe<String>;
  ebu_in?: Maybe<String[] | String>;
  ebu_not_in?: Maybe<String[] | String>;
  ebu_lt?: Maybe<String>;
  ebu_lte?: Maybe<String>;
  ebu_gt?: Maybe<String>;
  ebu_gte?: Maybe<String>;
  ebu_contains?: Maybe<String>;
  ebu_not_contains?: Maybe<String>;
  ebu_starts_with?: Maybe<String>;
  ebu_not_starts_with?: Maybe<String>;
  ebu_ends_with?: Maybe<String>;
  ebu_not_ends_with?: Maybe<String>;
  energia?: Maybe<Float>;
  energia_not?: Maybe<Float>;
  energia_in?: Maybe<Float[] | Float>;
  energia_not_in?: Maybe<Float[] | Float>;
  energia_lt?: Maybe<Float>;
  energia_lte?: Maybe<Float>;
  energia_gt?: Maybe<Float>;
  energia_gte?: Maybe<Float>;
  valikoima?: Maybe<String>;
  valikoima_not?: Maybe<String>;
  valikoima_in?: Maybe<String[] | String>;
  valikoima_not_in?: Maybe<String[] | String>;
  valikoima_lt?: Maybe<String>;
  valikoima_lte?: Maybe<String>;
  valikoima_gt?: Maybe<String>;
  valikoima_gte?: Maybe<String>;
  valikoima_contains?: Maybe<String>;
  valikoima_not_contains?: Maybe<String>;
  valikoima_starts_with?: Maybe<String>;
  valikoima_not_starts_with?: Maybe<String>;
  valikoima_ends_with?: Maybe<String>;
  valikoima_not_ends_with?: Maybe<String>;
  alkoholilitrahinta?: Maybe<Float>;
  alkoholilitrahinta_not?: Maybe<Float>;
  alkoholilitrahinta_in?: Maybe<Float[] | Float>;
  alkoholilitrahinta_not_in?: Maybe<Float[] | Float>;
  alkoholilitrahinta_lt?: Maybe<Float>;
  alkoholilitrahinta_lte?: Maybe<Float>;
  alkoholilitrahinta_gt?: Maybe<Float>;
  alkoholilitrahinta_gte?: Maybe<Float>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface ProductUpdateInput {
  nimi?: Maybe<String>;
  valmistaja?: Maybe<String>;
  pullokoko?: Maybe<Float>;
  hinta?: Maybe<Float>;
  litrahinta?: Maybe<String>;
  uutuus?: Maybe<String>;
  hinnastojarjestys?: Maybe<String>;
  tyyppi?: Maybe<String>;
  erityisryhma?: Maybe<String>;
  oluttyyppi?: Maybe<String>;
  valmistusmaa?: Maybe<String>;
  alue?: Maybe<String>;
  vuosikerta?: Maybe<Int>;
  etikettimerkintoja?: Maybe<String>;
  huomautus?: Maybe<String>;
  rypaleet?: Maybe<String>;
  luonnehdinta?: Maybe<String>;
  pakkaustyyppi?: Maybe<String>;
  suljentatyyppi?: Maybe<String>;
  alkoholiprosentti?: Maybe<Float>;
  hapot?: Maybe<Float>;
  sokeri?: Maybe<Float>;
  kantavierreprosentti?: Maybe<Float>;
  vari?: Maybe<String>;
  ebc?: Maybe<String>;
  katkerot?: Maybe<String>;
  ebu?: Maybe<String>;
  energia?: Maybe<Float>;
  valikoima?: Maybe<String>;
  alkoholilitrahinta?: Maybe<Float>;
}

export interface ProductUpdateManyMutationInput {
  nimi?: Maybe<String>;
  valmistaja?: Maybe<String>;
  pullokoko?: Maybe<Float>;
  hinta?: Maybe<Float>;
  litrahinta?: Maybe<String>;
  uutuus?: Maybe<String>;
  hinnastojarjestys?: Maybe<String>;
  tyyppi?: Maybe<String>;
  erityisryhma?: Maybe<String>;
  oluttyyppi?: Maybe<String>;
  valmistusmaa?: Maybe<String>;
  alue?: Maybe<String>;
  vuosikerta?: Maybe<Int>;
  etikettimerkintoja?: Maybe<String>;
  huomautus?: Maybe<String>;
  rypaleet?: Maybe<String>;
  luonnehdinta?: Maybe<String>;
  pakkaustyyppi?: Maybe<String>;
  suljentatyyppi?: Maybe<String>;
  alkoholiprosentti?: Maybe<Float>;
  hapot?: Maybe<Float>;
  sokeri?: Maybe<Float>;
  kantavierreprosentti?: Maybe<Float>;
  vari?: Maybe<String>;
  ebc?: Maybe<String>;
  katkerot?: Maybe<String>;
  ebu?: Maybe<String>;
  energia?: Maybe<Float>;
  valikoima?: Maybe<String>;
  alkoholilitrahinta?: Maybe<Float>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Product {
  id: ID_Output;
  nimi?: String;
  valmistaja?: String;
  pullokoko?: Float;
  hinta?: Float;
  litrahinta?: String;
  uutuus?: String;
  hinnastojarjestys?: String;
  tyyppi?: String;
  erityisryhma?: String;
  oluttyyppi?: String;
  valmistusmaa?: String;
  alue?: String;
  vuosikerta?: Int;
  etikettimerkintoja?: String;
  huomautus?: String;
  rypaleet?: String;
  luonnehdinta?: String;
  pakkaustyyppi?: String;
  suljentatyyppi?: String;
  alkoholiprosentti?: Float;
  hapot?: Float;
  sokeri?: Float;
  kantavierreprosentti?: Float;
  vari?: String;
  ebc?: String;
  katkerot?: String;
  ebu?: String;
  energia?: Float;
  valikoima?: String;
  alkoholilitrahinta?: Float;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  nimi: () => Promise<String>;
  valmistaja: () => Promise<String>;
  pullokoko: () => Promise<Float>;
  hinta: () => Promise<Float>;
  litrahinta: () => Promise<String>;
  uutuus: () => Promise<String>;
  hinnastojarjestys: () => Promise<String>;
  tyyppi: () => Promise<String>;
  erityisryhma: () => Promise<String>;
  oluttyyppi: () => Promise<String>;
  valmistusmaa: () => Promise<String>;
  alue: () => Promise<String>;
  vuosikerta: () => Promise<Int>;
  etikettimerkintoja: () => Promise<String>;
  huomautus: () => Promise<String>;
  rypaleet: () => Promise<String>;
  luonnehdinta: () => Promise<String>;
  pakkaustyyppi: () => Promise<String>;
  suljentatyyppi: () => Promise<String>;
  alkoholiprosentti: () => Promise<Float>;
  hapot: () => Promise<Float>;
  sokeri: () => Promise<Float>;
  kantavierreprosentti: () => Promise<Float>;
  vari: () => Promise<String>;
  ebc: () => Promise<String>;
  katkerot: () => Promise<String>;
  ebu: () => Promise<String>;
  energia: () => Promise<Float>;
  valikoima: () => Promise<String>;
  alkoholilitrahinta: () => Promise<Float>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nimi: () => Promise<AsyncIterator<String>>;
  valmistaja: () => Promise<AsyncIterator<String>>;
  pullokoko: () => Promise<AsyncIterator<Float>>;
  hinta: () => Promise<AsyncIterator<Float>>;
  litrahinta: () => Promise<AsyncIterator<String>>;
  uutuus: () => Promise<AsyncIterator<String>>;
  hinnastojarjestys: () => Promise<AsyncIterator<String>>;
  tyyppi: () => Promise<AsyncIterator<String>>;
  erityisryhma: () => Promise<AsyncIterator<String>>;
  oluttyyppi: () => Promise<AsyncIterator<String>>;
  valmistusmaa: () => Promise<AsyncIterator<String>>;
  alue: () => Promise<AsyncIterator<String>>;
  vuosikerta: () => Promise<AsyncIterator<Int>>;
  etikettimerkintoja: () => Promise<AsyncIterator<String>>;
  huomautus: () => Promise<AsyncIterator<String>>;
  rypaleet: () => Promise<AsyncIterator<String>>;
  luonnehdinta: () => Promise<AsyncIterator<String>>;
  pakkaustyyppi: () => Promise<AsyncIterator<String>>;
  suljentatyyppi: () => Promise<AsyncIterator<String>>;
  alkoholiprosentti: () => Promise<AsyncIterator<Float>>;
  hapot: () => Promise<AsyncIterator<Float>>;
  sokeri: () => Promise<AsyncIterator<Float>>;
  kantavierreprosentti: () => Promise<AsyncIterator<Float>>;
  vari: () => Promise<AsyncIterator<String>>;
  ebc: () => Promise<AsyncIterator<String>>;
  katkerot: () => Promise<AsyncIterator<String>>;
  ebu: () => Promise<AsyncIterator<String>>;
  energia: () => Promise<AsyncIterator<Float>>;
  valikoima: () => Promise<AsyncIterator<String>>;
  alkoholilitrahinta: () => Promise<AsyncIterator<Float>>;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nimi: () => Promise<String>;
  valmistaja: () => Promise<String>;
  pullokoko: () => Promise<Float>;
  hinta: () => Promise<Float>;
  litrahinta: () => Promise<String>;
  uutuus: () => Promise<String>;
  hinnastojarjestys: () => Promise<String>;
  tyyppi: () => Promise<String>;
  erityisryhma: () => Promise<String>;
  oluttyyppi: () => Promise<String>;
  valmistusmaa: () => Promise<String>;
  alue: () => Promise<String>;
  vuosikerta: () => Promise<Int>;
  etikettimerkintoja: () => Promise<String>;
  huomautus: () => Promise<String>;
  rypaleet: () => Promise<String>;
  luonnehdinta: () => Promise<String>;
  pakkaustyyppi: () => Promise<String>;
  suljentatyyppi: () => Promise<String>;
  alkoholiprosentti: () => Promise<Float>;
  hapot: () => Promise<Float>;
  sokeri: () => Promise<Float>;
  kantavierreprosentti: () => Promise<Float>;
  vari: () => Promise<String>;
  ebc: () => Promise<String>;
  katkerot: () => Promise<String>;
  ebu: () => Promise<String>;
  energia: () => Promise<Float>;
  valikoima: () => Promise<String>;
  alkoholilitrahinta: () => Promise<Float>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductPreviousValues {
  id: ID_Output;
  nimi?: String;
  valmistaja?: String;
  pullokoko?: Float;
  hinta?: Float;
  litrahinta?: String;
  uutuus?: String;
  hinnastojarjestys?: String;
  tyyppi?: String;
  erityisryhma?: String;
  oluttyyppi?: String;
  valmistusmaa?: String;
  alue?: String;
  vuosikerta?: Int;
  etikettimerkintoja?: String;
  huomautus?: String;
  rypaleet?: String;
  luonnehdinta?: String;
  pakkaustyyppi?: String;
  suljentatyyppi?: String;
  alkoholiprosentti?: Float;
  hapot?: Float;
  sokeri?: Float;
  kantavierreprosentti?: Float;
  vari?: String;
  ebc?: String;
  katkerot?: String;
  ebu?: String;
  energia?: Float;
  valikoima?: String;
  alkoholilitrahinta?: Float;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nimi: () => Promise<String>;
  valmistaja: () => Promise<String>;
  pullokoko: () => Promise<Float>;
  hinta: () => Promise<Float>;
  litrahinta: () => Promise<String>;
  uutuus: () => Promise<String>;
  hinnastojarjestys: () => Promise<String>;
  tyyppi: () => Promise<String>;
  erityisryhma: () => Promise<String>;
  oluttyyppi: () => Promise<String>;
  valmistusmaa: () => Promise<String>;
  alue: () => Promise<String>;
  vuosikerta: () => Promise<Int>;
  etikettimerkintoja: () => Promise<String>;
  huomautus: () => Promise<String>;
  rypaleet: () => Promise<String>;
  luonnehdinta: () => Promise<String>;
  pakkaustyyppi: () => Promise<String>;
  suljentatyyppi: () => Promise<String>;
  alkoholiprosentti: () => Promise<Float>;
  hapot: () => Promise<Float>;
  sokeri: () => Promise<Float>;
  kantavierreprosentti: () => Promise<Float>;
  vari: () => Promise<String>;
  ebc: () => Promise<String>;
  katkerot: () => Promise<String>;
  ebu: () => Promise<String>;
  energia: () => Promise<Float>;
  valikoima: () => Promise<String>;
  alkoholilitrahinta: () => Promise<Float>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nimi: () => Promise<AsyncIterator<String>>;
  valmistaja: () => Promise<AsyncIterator<String>>;
  pullokoko: () => Promise<AsyncIterator<Float>>;
  hinta: () => Promise<AsyncIterator<Float>>;
  litrahinta: () => Promise<AsyncIterator<String>>;
  uutuus: () => Promise<AsyncIterator<String>>;
  hinnastojarjestys: () => Promise<AsyncIterator<String>>;
  tyyppi: () => Promise<AsyncIterator<String>>;
  erityisryhma: () => Promise<AsyncIterator<String>>;
  oluttyyppi: () => Promise<AsyncIterator<String>>;
  valmistusmaa: () => Promise<AsyncIterator<String>>;
  alue: () => Promise<AsyncIterator<String>>;
  vuosikerta: () => Promise<AsyncIterator<Int>>;
  etikettimerkintoja: () => Promise<AsyncIterator<String>>;
  huomautus: () => Promise<AsyncIterator<String>>;
  rypaleet: () => Promise<AsyncIterator<String>>;
  luonnehdinta: () => Promise<AsyncIterator<String>>;
  pakkaustyyppi: () => Promise<AsyncIterator<String>>;
  suljentatyyppi: () => Promise<AsyncIterator<String>>;
  alkoholiprosentti: () => Promise<AsyncIterator<Float>>;
  hapot: () => Promise<AsyncIterator<Float>>;
  sokeri: () => Promise<AsyncIterator<Float>>;
  kantavierreprosentti: () => Promise<AsyncIterator<Float>>;
  vari: () => Promise<AsyncIterator<String>>;
  ebc: () => Promise<AsyncIterator<String>>;
  katkerot: () => Promise<AsyncIterator<String>>;
  ebu: () => Promise<AsyncIterator<String>>;
  energia: () => Promise<AsyncIterator<Float>>;
  valikoima: () => Promise<AsyncIterator<String>>;
  alkoholilitrahinta: () => Promise<AsyncIterator<Float>>;
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Product",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
