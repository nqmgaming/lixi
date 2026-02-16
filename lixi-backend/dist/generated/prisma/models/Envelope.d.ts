import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EnvelopeModel = runtime.Types.Result.DefaultSelection<Prisma.$EnvelopePayload>;
export type AggregateEnvelope = {
    _count: EnvelopeCountAggregateOutputType | null;
    _avg: EnvelopeAvgAggregateOutputType | null;
    _sum: EnvelopeSumAggregateOutputType | null;
    _min: EnvelopeMinAggregateOutputType | null;
    _max: EnvelopeMaxAggregateOutputType | null;
};
export type EnvelopeAvgAggregateOutputType = {
    id: number | null;
    campaignId: number | null;
    amount: number | null;
};
export type EnvelopeSumAggregateOutputType = {
    id: number | null;
    campaignId: number | null;
    amount: number | null;
};
export type EnvelopeMinAggregateOutputType = {
    id: number | null;
    campaignId: number | null;
    tokenHash: string | null;
    status: string | null;
    amount: number | null;
    wish: string | null;
    claimedAt: Date | null;
    claimedIp: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type EnvelopeMaxAggregateOutputType = {
    id: number | null;
    campaignId: number | null;
    tokenHash: string | null;
    status: string | null;
    amount: number | null;
    wish: string | null;
    claimedAt: Date | null;
    claimedIp: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
};
export type EnvelopeCountAggregateOutputType = {
    id: number;
    campaignId: number;
    tokenHash: number;
    status: number;
    amount: number;
    wish: number;
    claimedAt: number;
    claimedIp: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
};
export type EnvelopeAvgAggregateInputType = {
    id?: true;
    campaignId?: true;
    amount?: true;
};
export type EnvelopeSumAggregateInputType = {
    id?: true;
    campaignId?: true;
    amount?: true;
};
export type EnvelopeMinAggregateInputType = {
    id?: true;
    campaignId?: true;
    tokenHash?: true;
    status?: true;
    amount?: true;
    wish?: true;
    claimedAt?: true;
    claimedIp?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type EnvelopeMaxAggregateInputType = {
    id?: true;
    campaignId?: true;
    tokenHash?: true;
    status?: true;
    amount?: true;
    wish?: true;
    claimedAt?: true;
    claimedIp?: true;
    expiresAt?: true;
    createdAt?: true;
};
export type EnvelopeCountAggregateInputType = {
    id?: true;
    campaignId?: true;
    tokenHash?: true;
    status?: true;
    amount?: true;
    wish?: true;
    claimedAt?: true;
    claimedIp?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
};
export type EnvelopeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvelopeWhereInput;
    orderBy?: Prisma.EnvelopeOrderByWithRelationInput | Prisma.EnvelopeOrderByWithRelationInput[];
    cursor?: Prisma.EnvelopeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EnvelopeCountAggregateInputType;
    _avg?: EnvelopeAvgAggregateInputType;
    _sum?: EnvelopeSumAggregateInputType;
    _min?: EnvelopeMinAggregateInputType;
    _max?: EnvelopeMaxAggregateInputType;
};
export type GetEnvelopeAggregateType<T extends EnvelopeAggregateArgs> = {
    [P in keyof T & keyof AggregateEnvelope]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEnvelope[P]> : Prisma.GetScalarType<T[P], AggregateEnvelope[P]>;
};
export type EnvelopeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvelopeWhereInput;
    orderBy?: Prisma.EnvelopeOrderByWithAggregationInput | Prisma.EnvelopeOrderByWithAggregationInput[];
    by: Prisma.EnvelopeScalarFieldEnum[] | Prisma.EnvelopeScalarFieldEnum;
    having?: Prisma.EnvelopeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EnvelopeCountAggregateInputType | true;
    _avg?: EnvelopeAvgAggregateInputType;
    _sum?: EnvelopeSumAggregateInputType;
    _min?: EnvelopeMinAggregateInputType;
    _max?: EnvelopeMaxAggregateInputType;
};
export type EnvelopeGroupByOutputType = {
    id: number;
    campaignId: number;
    tokenHash: string;
    status: string;
    amount: number | null;
    wish: string | null;
    claimedAt: Date | null;
    claimedIp: string | null;
    expiresAt: Date | null;
    createdAt: Date;
    _count: EnvelopeCountAggregateOutputType | null;
    _avg: EnvelopeAvgAggregateOutputType | null;
    _sum: EnvelopeSumAggregateOutputType | null;
    _min: EnvelopeMinAggregateOutputType | null;
    _max: EnvelopeMaxAggregateOutputType | null;
};
type GetEnvelopeGroupByPayload<T extends EnvelopeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EnvelopeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EnvelopeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EnvelopeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EnvelopeGroupByOutputType[P]>;
}>>;
export type EnvelopeWhereInput = {
    AND?: Prisma.EnvelopeWhereInput | Prisma.EnvelopeWhereInput[];
    OR?: Prisma.EnvelopeWhereInput[];
    NOT?: Prisma.EnvelopeWhereInput | Prisma.EnvelopeWhereInput[];
    id?: Prisma.IntFilter<"Envelope"> | number;
    campaignId?: Prisma.IntFilter<"Envelope"> | number;
    tokenHash?: Prisma.StringFilter<"Envelope"> | string;
    status?: Prisma.StringFilter<"Envelope"> | string;
    amount?: Prisma.IntNullableFilter<"Envelope"> | number | null;
    wish?: Prisma.StringNullableFilter<"Envelope"> | string | null;
    claimedAt?: Prisma.DateTimeNullableFilter<"Envelope"> | Date | string | null;
    claimedIp?: Prisma.StringNullableFilter<"Envelope"> | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Envelope"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Envelope"> | Date | string;
    campaign?: Prisma.XOR<Prisma.CampaignScalarRelationFilter, Prisma.CampaignWhereInput>;
};
export type EnvelopeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    wish?: Prisma.SortOrderInput | Prisma.SortOrder;
    claimedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    claimedIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    campaign?: Prisma.CampaignOrderByWithRelationInput;
};
export type EnvelopeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    tokenHash?: string;
    AND?: Prisma.EnvelopeWhereInput | Prisma.EnvelopeWhereInput[];
    OR?: Prisma.EnvelopeWhereInput[];
    NOT?: Prisma.EnvelopeWhereInput | Prisma.EnvelopeWhereInput[];
    campaignId?: Prisma.IntFilter<"Envelope"> | number;
    status?: Prisma.StringFilter<"Envelope"> | string;
    amount?: Prisma.IntNullableFilter<"Envelope"> | number | null;
    wish?: Prisma.StringNullableFilter<"Envelope"> | string | null;
    claimedAt?: Prisma.DateTimeNullableFilter<"Envelope"> | Date | string | null;
    claimedIp?: Prisma.StringNullableFilter<"Envelope"> | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Envelope"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Envelope"> | Date | string;
    campaign?: Prisma.XOR<Prisma.CampaignScalarRelationFilter, Prisma.CampaignWhereInput>;
}, "id" | "tokenHash">;
export type EnvelopeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    wish?: Prisma.SortOrderInput | Prisma.SortOrder;
    claimedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    claimedIp?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EnvelopeCountOrderByAggregateInput;
    _avg?: Prisma.EnvelopeAvgOrderByAggregateInput;
    _max?: Prisma.EnvelopeMaxOrderByAggregateInput;
    _min?: Prisma.EnvelopeMinOrderByAggregateInput;
    _sum?: Prisma.EnvelopeSumOrderByAggregateInput;
};
export type EnvelopeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EnvelopeScalarWhereWithAggregatesInput | Prisma.EnvelopeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EnvelopeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EnvelopeScalarWhereWithAggregatesInput | Prisma.EnvelopeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Envelope"> | number;
    campaignId?: Prisma.IntWithAggregatesFilter<"Envelope"> | number;
    tokenHash?: Prisma.StringWithAggregatesFilter<"Envelope"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Envelope"> | string;
    amount?: Prisma.IntNullableWithAggregatesFilter<"Envelope"> | number | null;
    wish?: Prisma.StringNullableWithAggregatesFilter<"Envelope"> | string | null;
    claimedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Envelope"> | Date | string | null;
    claimedIp?: Prisma.StringNullableWithAggregatesFilter<"Envelope"> | string | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Envelope"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Envelope"> | Date | string;
};
export type EnvelopeCreateInput = {
    tokenHash: string;
    status?: string;
    amount?: number | null;
    wish?: string | null;
    claimedAt?: Date | string | null;
    claimedIp?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    campaign: Prisma.CampaignCreateNestedOneWithoutEnvelopesInput;
};
export type EnvelopeUncheckedCreateInput = {
    id?: number;
    campaignId: number;
    tokenHash: string;
    status?: string;
    amount?: number | null;
    wish?: string | null;
    claimedAt?: Date | string | null;
    claimedIp?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EnvelopeUpdateInput = {
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign?: Prisma.CampaignUpdateOneRequiredWithoutEnvelopesNestedInput;
};
export type EnvelopeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvelopeCreateManyInput = {
    id?: number;
    campaignId: number;
    tokenHash: string;
    status?: string;
    amount?: number | null;
    wish?: string | null;
    claimedAt?: Date | string | null;
    claimedIp?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EnvelopeUpdateManyMutationInput = {
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvelopeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvelopeListRelationFilter = {
    every?: Prisma.EnvelopeWhereInput;
    some?: Prisma.EnvelopeWhereInput;
    none?: Prisma.EnvelopeWhereInput;
};
export type EnvelopeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnvelopeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    wish?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    claimedIp?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnvelopeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type EnvelopeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    wish?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    claimedIp?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnvelopeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    wish?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    claimedIp?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EnvelopeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type EnvelopeCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.EnvelopeCreateWithoutCampaignInput, Prisma.EnvelopeUncheckedCreateWithoutCampaignInput> | Prisma.EnvelopeCreateWithoutCampaignInput[] | Prisma.EnvelopeUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EnvelopeCreateOrConnectWithoutCampaignInput | Prisma.EnvelopeCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.EnvelopeCreateManyCampaignInputEnvelope;
    connect?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
};
export type EnvelopeUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.EnvelopeCreateWithoutCampaignInput, Prisma.EnvelopeUncheckedCreateWithoutCampaignInput> | Prisma.EnvelopeCreateWithoutCampaignInput[] | Prisma.EnvelopeUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EnvelopeCreateOrConnectWithoutCampaignInput | Prisma.EnvelopeCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.EnvelopeCreateManyCampaignInputEnvelope;
    connect?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
};
export type EnvelopeUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.EnvelopeCreateWithoutCampaignInput, Prisma.EnvelopeUncheckedCreateWithoutCampaignInput> | Prisma.EnvelopeCreateWithoutCampaignInput[] | Prisma.EnvelopeUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EnvelopeCreateOrConnectWithoutCampaignInput | Prisma.EnvelopeCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.EnvelopeUpsertWithWhereUniqueWithoutCampaignInput | Prisma.EnvelopeUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.EnvelopeCreateManyCampaignInputEnvelope;
    set?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    disconnect?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    delete?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    connect?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    update?: Prisma.EnvelopeUpdateWithWhereUniqueWithoutCampaignInput | Prisma.EnvelopeUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.EnvelopeUpdateManyWithWhereWithoutCampaignInput | Prisma.EnvelopeUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.EnvelopeScalarWhereInput | Prisma.EnvelopeScalarWhereInput[];
};
export type EnvelopeUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.EnvelopeCreateWithoutCampaignInput, Prisma.EnvelopeUncheckedCreateWithoutCampaignInput> | Prisma.EnvelopeCreateWithoutCampaignInput[] | Prisma.EnvelopeUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.EnvelopeCreateOrConnectWithoutCampaignInput | Prisma.EnvelopeCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.EnvelopeUpsertWithWhereUniqueWithoutCampaignInput | Prisma.EnvelopeUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.EnvelopeCreateManyCampaignInputEnvelope;
    set?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    disconnect?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    delete?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    connect?: Prisma.EnvelopeWhereUniqueInput | Prisma.EnvelopeWhereUniqueInput[];
    update?: Prisma.EnvelopeUpdateWithWhereUniqueWithoutCampaignInput | Prisma.EnvelopeUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.EnvelopeUpdateManyWithWhereWithoutCampaignInput | Prisma.EnvelopeUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.EnvelopeScalarWhereInput | Prisma.EnvelopeScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnvelopeCreateWithoutCampaignInput = {
    tokenHash: string;
    status?: string;
    amount?: number | null;
    wish?: string | null;
    claimedAt?: Date | string | null;
    claimedIp?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EnvelopeUncheckedCreateWithoutCampaignInput = {
    id?: number;
    tokenHash: string;
    status?: string;
    amount?: number | null;
    wish?: string | null;
    claimedAt?: Date | string | null;
    claimedIp?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EnvelopeCreateOrConnectWithoutCampaignInput = {
    where: Prisma.EnvelopeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnvelopeCreateWithoutCampaignInput, Prisma.EnvelopeUncheckedCreateWithoutCampaignInput>;
};
export type EnvelopeCreateManyCampaignInputEnvelope = {
    data: Prisma.EnvelopeCreateManyCampaignInput | Prisma.EnvelopeCreateManyCampaignInput[];
};
export type EnvelopeUpsertWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.EnvelopeWhereUniqueInput;
    update: Prisma.XOR<Prisma.EnvelopeUpdateWithoutCampaignInput, Prisma.EnvelopeUncheckedUpdateWithoutCampaignInput>;
    create: Prisma.XOR<Prisma.EnvelopeCreateWithoutCampaignInput, Prisma.EnvelopeUncheckedCreateWithoutCampaignInput>;
};
export type EnvelopeUpdateWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.EnvelopeWhereUniqueInput;
    data: Prisma.XOR<Prisma.EnvelopeUpdateWithoutCampaignInput, Prisma.EnvelopeUncheckedUpdateWithoutCampaignInput>;
};
export type EnvelopeUpdateManyWithWhereWithoutCampaignInput = {
    where: Prisma.EnvelopeScalarWhereInput;
    data: Prisma.XOR<Prisma.EnvelopeUpdateManyMutationInput, Prisma.EnvelopeUncheckedUpdateManyWithoutCampaignInput>;
};
export type EnvelopeScalarWhereInput = {
    AND?: Prisma.EnvelopeScalarWhereInput | Prisma.EnvelopeScalarWhereInput[];
    OR?: Prisma.EnvelopeScalarWhereInput[];
    NOT?: Prisma.EnvelopeScalarWhereInput | Prisma.EnvelopeScalarWhereInput[];
    id?: Prisma.IntFilter<"Envelope"> | number;
    campaignId?: Prisma.IntFilter<"Envelope"> | number;
    tokenHash?: Prisma.StringFilter<"Envelope"> | string;
    status?: Prisma.StringFilter<"Envelope"> | string;
    amount?: Prisma.IntNullableFilter<"Envelope"> | number | null;
    wish?: Prisma.StringNullableFilter<"Envelope"> | string | null;
    claimedAt?: Prisma.DateTimeNullableFilter<"Envelope"> | Date | string | null;
    claimedIp?: Prisma.StringNullableFilter<"Envelope"> | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"Envelope"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Envelope"> | Date | string;
};
export type EnvelopeCreateManyCampaignInput = {
    id?: number;
    tokenHash: string;
    status?: string;
    amount?: number | null;
    wish?: string | null;
    claimedAt?: Date | string | null;
    claimedIp?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EnvelopeUpdateWithoutCampaignInput = {
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvelopeUncheckedUpdateWithoutCampaignInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvelopeUncheckedUpdateManyWithoutCampaignInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    wish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    claimedIp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EnvelopeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaignId?: boolean;
    tokenHash?: boolean;
    status?: boolean;
    amount?: boolean;
    wish?: boolean;
    claimedAt?: boolean;
    claimedIp?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["envelope"]>;
export type EnvelopeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaignId?: boolean;
    tokenHash?: boolean;
    status?: boolean;
    amount?: boolean;
    wish?: boolean;
    claimedAt?: boolean;
    claimedIp?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["envelope"]>;
export type EnvelopeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campaignId?: boolean;
    tokenHash?: boolean;
    status?: boolean;
    amount?: boolean;
    wish?: boolean;
    claimedAt?: boolean;
    claimedIp?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["envelope"]>;
export type EnvelopeSelectScalar = {
    id?: boolean;
    campaignId?: boolean;
    tokenHash?: boolean;
    status?: boolean;
    amount?: boolean;
    wish?: boolean;
    claimedAt?: boolean;
    claimedIp?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
};
export type EnvelopeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "campaignId" | "tokenHash" | "status" | "amount" | "wish" | "claimedAt" | "claimedIp" | "expiresAt" | "createdAt", ExtArgs["result"]["envelope"]>;
export type EnvelopeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
};
export type EnvelopeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
};
export type EnvelopeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign?: boolean | Prisma.CampaignDefaultArgs<ExtArgs>;
};
export type $EnvelopePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Envelope";
    objects: {
        campaign: Prisma.$CampaignPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        campaignId: number;
        tokenHash: string;
        status: string;
        amount: number | null;
        wish: string | null;
        claimedAt: Date | null;
        claimedIp: string | null;
        expiresAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["envelope"]>;
    composites: {};
};
export type EnvelopeGetPayload<S extends boolean | null | undefined | EnvelopeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EnvelopePayload, S>;
export type EnvelopeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EnvelopeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EnvelopeCountAggregateInputType | true;
};
export interface EnvelopeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Envelope'];
        meta: {
            name: 'Envelope';
        };
    };
    findUnique<T extends EnvelopeFindUniqueArgs>(args: Prisma.SelectSubset<T, EnvelopeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EnvelopeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EnvelopeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EnvelopeFindFirstArgs>(args?: Prisma.SelectSubset<T, EnvelopeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EnvelopeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EnvelopeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EnvelopeFindManyArgs>(args?: Prisma.SelectSubset<T, EnvelopeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EnvelopeCreateArgs>(args: Prisma.SelectSubset<T, EnvelopeCreateArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EnvelopeCreateManyArgs>(args?: Prisma.SelectSubset<T, EnvelopeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EnvelopeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EnvelopeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EnvelopeDeleteArgs>(args: Prisma.SelectSubset<T, EnvelopeDeleteArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EnvelopeUpdateArgs>(args: Prisma.SelectSubset<T, EnvelopeUpdateArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EnvelopeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EnvelopeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EnvelopeUpdateManyArgs>(args: Prisma.SelectSubset<T, EnvelopeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EnvelopeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EnvelopeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EnvelopeUpsertArgs>(args: Prisma.SelectSubset<T, EnvelopeUpsertArgs<ExtArgs>>): Prisma.Prisma__EnvelopeClient<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EnvelopeCountArgs>(args?: Prisma.Subset<T, EnvelopeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EnvelopeCountAggregateOutputType> : number>;
    aggregate<T extends EnvelopeAggregateArgs>(args: Prisma.Subset<T, EnvelopeAggregateArgs>): Prisma.PrismaPromise<GetEnvelopeAggregateType<T>>;
    groupBy<T extends EnvelopeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EnvelopeGroupByArgs['orderBy'];
    } : {
        orderBy?: EnvelopeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EnvelopeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvelopeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EnvelopeFieldRefs;
}
export interface Prisma__EnvelopeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaign<T extends Prisma.CampaignDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CampaignDefaultArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EnvelopeFieldRefs {
    readonly id: Prisma.FieldRef<"Envelope", 'Int'>;
    readonly campaignId: Prisma.FieldRef<"Envelope", 'Int'>;
    readonly tokenHash: Prisma.FieldRef<"Envelope", 'String'>;
    readonly status: Prisma.FieldRef<"Envelope", 'String'>;
    readonly amount: Prisma.FieldRef<"Envelope", 'Int'>;
    readonly wish: Prisma.FieldRef<"Envelope", 'String'>;
    readonly claimedAt: Prisma.FieldRef<"Envelope", 'DateTime'>;
    readonly claimedIp: Prisma.FieldRef<"Envelope", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"Envelope", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Envelope", 'DateTime'>;
}
export type EnvelopeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where: Prisma.EnvelopeWhereUniqueInput;
};
export type EnvelopeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where: Prisma.EnvelopeWhereUniqueInput;
};
export type EnvelopeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where?: Prisma.EnvelopeWhereInput;
    orderBy?: Prisma.EnvelopeOrderByWithRelationInput | Prisma.EnvelopeOrderByWithRelationInput[];
    cursor?: Prisma.EnvelopeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnvelopeScalarFieldEnum | Prisma.EnvelopeScalarFieldEnum[];
};
export type EnvelopeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where?: Prisma.EnvelopeWhereInput;
    orderBy?: Prisma.EnvelopeOrderByWithRelationInput | Prisma.EnvelopeOrderByWithRelationInput[];
    cursor?: Prisma.EnvelopeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnvelopeScalarFieldEnum | Prisma.EnvelopeScalarFieldEnum[];
};
export type EnvelopeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where?: Prisma.EnvelopeWhereInput;
    orderBy?: Prisma.EnvelopeOrderByWithRelationInput | Prisma.EnvelopeOrderByWithRelationInput[];
    cursor?: Prisma.EnvelopeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnvelopeScalarFieldEnum | Prisma.EnvelopeScalarFieldEnum[];
};
export type EnvelopeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnvelopeCreateInput, Prisma.EnvelopeUncheckedCreateInput>;
};
export type EnvelopeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EnvelopeCreateManyInput | Prisma.EnvelopeCreateManyInput[];
};
export type EnvelopeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    data: Prisma.EnvelopeCreateManyInput | Prisma.EnvelopeCreateManyInput[];
    include?: Prisma.EnvelopeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EnvelopeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnvelopeUpdateInput, Prisma.EnvelopeUncheckedUpdateInput>;
    where: Prisma.EnvelopeWhereUniqueInput;
};
export type EnvelopeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EnvelopeUpdateManyMutationInput, Prisma.EnvelopeUncheckedUpdateManyInput>;
    where?: Prisma.EnvelopeWhereInput;
    limit?: number;
};
export type EnvelopeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EnvelopeUpdateManyMutationInput, Prisma.EnvelopeUncheckedUpdateManyInput>;
    where?: Prisma.EnvelopeWhereInput;
    limit?: number;
    include?: Prisma.EnvelopeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EnvelopeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where: Prisma.EnvelopeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EnvelopeCreateInput, Prisma.EnvelopeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EnvelopeUpdateInput, Prisma.EnvelopeUncheckedUpdateInput>;
};
export type EnvelopeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
    where: Prisma.EnvelopeWhereUniqueInput;
};
export type EnvelopeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvelopeWhereInput;
    limit?: number;
};
export type EnvelopeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnvelopeSelect<ExtArgs> | null;
    omit?: Prisma.EnvelopeOmit<ExtArgs> | null;
    include?: Prisma.EnvelopeInclude<ExtArgs> | null;
};
export {};
