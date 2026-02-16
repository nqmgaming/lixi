import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CampaignModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignPayload>;
export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
export type CampaignAvgAggregateOutputType = {
    id: number | null;
    budgetTotal: number | null;
    budgetUsed: number | null;
};
export type CampaignSumAggregateOutputType = {
    id: number | null;
    budgetTotal: number | null;
    budgetUsed: number | null;
};
export type CampaignMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    budgetTotal: number | null;
    budgetUsed: number | null;
    startAt: Date | null;
    endAt: Date | null;
    status: string | null;
    createdAt: Date | null;
};
export type CampaignMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    budgetTotal: number | null;
    budgetUsed: number | null;
    startAt: Date | null;
    endAt: Date | null;
    status: string | null;
    createdAt: Date | null;
};
export type CampaignCountAggregateOutputType = {
    id: number;
    name: number;
    budgetTotal: number;
    budgetUsed: number;
    startAt: number;
    endAt: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type CampaignAvgAggregateInputType = {
    id?: true;
    budgetTotal?: true;
    budgetUsed?: true;
};
export type CampaignSumAggregateInputType = {
    id?: true;
    budgetTotal?: true;
    budgetUsed?: true;
};
export type CampaignMinAggregateInputType = {
    id?: true;
    name?: true;
    budgetTotal?: true;
    budgetUsed?: true;
    startAt?: true;
    endAt?: true;
    status?: true;
    createdAt?: true;
};
export type CampaignMaxAggregateInputType = {
    id?: true;
    name?: true;
    budgetTotal?: true;
    budgetUsed?: true;
    startAt?: true;
    endAt?: true;
    status?: true;
    createdAt?: true;
};
export type CampaignCountAggregateInputType = {
    id?: true;
    name?: true;
    budgetTotal?: true;
    budgetUsed?: true;
    startAt?: true;
    endAt?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type CampaignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignCountAggregateInputType;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign[P]> : Prisma.GetScalarType<T[P], AggregateCampaign[P]>;
};
export type CampaignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithAggregationInput | Prisma.CampaignOrderByWithAggregationInput[];
    by: Prisma.CampaignScalarFieldEnum[] | Prisma.CampaignScalarFieldEnum;
    having?: Prisma.CampaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignCountAggregateInputType | true;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type CampaignGroupByOutputType = {
    id: number;
    name: string;
    budgetTotal: number;
    budgetUsed: number;
    startAt: Date;
    endAt: Date | null;
    status: string;
    createdAt: Date;
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]>;
}>>;
export type CampaignWhereInput = {
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    id?: Prisma.IntFilter<"Campaign"> | number;
    name?: Prisma.StringFilter<"Campaign"> | string;
    budgetTotal?: Prisma.IntFilter<"Campaign"> | number;
    budgetUsed?: Prisma.IntFilter<"Campaign"> | number;
    startAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    status?: Prisma.StringFilter<"Campaign"> | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    envelopes?: Prisma.EnvelopeListRelationFilter;
};
export type CampaignOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    envelopes?: Prisma.EnvelopeOrderByRelationAggregateInput;
};
export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    name?: Prisma.StringFilter<"Campaign"> | string;
    budgetTotal?: Prisma.IntFilter<"Campaign"> | number;
    budgetUsed?: Prisma.IntFilter<"Campaign"> | number;
    startAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    status?: Prisma.StringFilter<"Campaign"> | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    envelopes?: Prisma.EnvelopeListRelationFilter;
}, "id">;
export type CampaignOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CampaignCountOrderByAggregateInput;
    _avg?: Prisma.CampaignAvgOrderByAggregateInput;
    _max?: Prisma.CampaignMaxOrderByAggregateInput;
    _min?: Prisma.CampaignMinOrderByAggregateInput;
    _sum?: Prisma.CampaignSumOrderByAggregateInput;
};
export type CampaignScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Campaign"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    budgetTotal?: Prisma.IntWithAggregatesFilter<"Campaign"> | number;
    budgetUsed?: Prisma.IntWithAggregatesFilter<"Campaign"> | number;
    startAt?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    endAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
};
export type CampaignCreateInput = {
    name: string;
    budgetTotal: number;
    budgetUsed?: number;
    startAt?: Date | string;
    endAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    envelopes?: Prisma.EnvelopeCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateInput = {
    id?: number;
    name: string;
    budgetTotal: number;
    budgetUsed?: number;
    startAt?: Date | string;
    endAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
    envelopes?: Prisma.EnvelopeUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    budgetUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    envelopes?: Prisma.EnvelopeUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    budgetUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    envelopes?: Prisma.EnvelopeUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignCreateManyInput = {
    id?: number;
    name: string;
    budgetTotal: number;
    budgetUsed?: number;
    startAt?: Date | string;
    endAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
};
export type CampaignUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    budgetUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    budgetUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CampaignAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
};
export type CampaignMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CampaignMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
    startAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CampaignSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    budgetTotal?: Prisma.SortOrder;
    budgetUsed?: Prisma.SortOrder;
};
export type CampaignScalarRelationFilter = {
    is?: Prisma.CampaignWhereInput;
    isNot?: Prisma.CampaignWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type CampaignCreateNestedOneWithoutEnvelopesInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutEnvelopesInput, Prisma.CampaignUncheckedCreateWithoutEnvelopesInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutEnvelopesInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneRequiredWithoutEnvelopesNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutEnvelopesInput, Prisma.CampaignUncheckedCreateWithoutEnvelopesInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutEnvelopesInput;
    upsert?: Prisma.CampaignUpsertWithoutEnvelopesInput;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutEnvelopesInput, Prisma.CampaignUpdateWithoutEnvelopesInput>, Prisma.CampaignUncheckedUpdateWithoutEnvelopesInput>;
};
export type CampaignCreateWithoutEnvelopesInput = {
    name: string;
    budgetTotal: number;
    budgetUsed?: number;
    startAt?: Date | string;
    endAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
};
export type CampaignUncheckedCreateWithoutEnvelopesInput = {
    id?: number;
    name: string;
    budgetTotal: number;
    budgetUsed?: number;
    startAt?: Date | string;
    endAt?: Date | string | null;
    status?: string;
    createdAt?: Date | string;
};
export type CampaignCreateOrConnectWithoutEnvelopesInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutEnvelopesInput, Prisma.CampaignUncheckedCreateWithoutEnvelopesInput>;
};
export type CampaignUpsertWithoutEnvelopesInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutEnvelopesInput, Prisma.CampaignUncheckedUpdateWithoutEnvelopesInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutEnvelopesInput, Prisma.CampaignUncheckedCreateWithoutEnvelopesInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutEnvelopesInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutEnvelopesInput, Prisma.CampaignUncheckedUpdateWithoutEnvelopesInput>;
};
export type CampaignUpdateWithoutEnvelopesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    budgetUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignUncheckedUpdateWithoutEnvelopesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    budgetTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    budgetUsed?: Prisma.IntFieldUpdateOperationsInput | number;
    startAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CampaignCountOutputType = {
    envelopes: number;
};
export type CampaignCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    envelopes?: boolean | CampaignCountOutputTypeCountEnvelopesArgs;
};
export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignCountOutputTypeSelect<ExtArgs> | null;
};
export type CampaignCountOutputTypeCountEnvelopesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnvelopeWhereInput;
};
export type CampaignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    budgetTotal?: boolean;
    budgetUsed?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    envelopes?: boolean | Prisma.Campaign$envelopesArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    budgetTotal?: boolean;
    budgetUsed?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    budgetTotal?: boolean;
    budgetUsed?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectScalar = {
    id?: boolean;
    name?: boolean;
    budgetTotal?: boolean;
    budgetUsed?: boolean;
    startAt?: boolean;
    endAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type CampaignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "budgetTotal" | "budgetUsed" | "startAt" | "endAt" | "status" | "createdAt", ExtArgs["result"]["campaign"]>;
export type CampaignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    envelopes?: boolean | Prisma.Campaign$envelopesArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampaignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CampaignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campaign";
    objects: {
        envelopes: Prisma.$EnvelopePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        budgetTotal: number;
        budgetUsed: number;
        startAt: Date;
        endAt: Date | null;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["campaign"]>;
    composites: {};
};
export type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignPayload, S>;
export type CampaignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignCountAggregateInputType | true;
};
export interface CampaignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campaign'];
        meta: {
            name: 'Campaign';
        };
    };
    findUnique<T extends CampaignFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CampaignFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CampaignFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CampaignCreateArgs>(args: Prisma.SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CampaignCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CampaignDeleteArgs>(args: Prisma.SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CampaignUpdateArgs>(args: Prisma.SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CampaignDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CampaignUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CampaignUpsertArgs>(args: Prisma.SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CampaignCountArgs>(args?: Prisma.Subset<T, CampaignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignCountAggregateOutputType> : number>;
    aggregate<T extends CampaignAggregateArgs>(args: Prisma.Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>;
    groupBy<T extends CampaignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CampaignFieldRefs;
}
export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    envelopes<T extends Prisma.Campaign$envelopesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$envelopesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnvelopePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CampaignFieldRefs {
    readonly id: Prisma.FieldRef<"Campaign", 'Int'>;
    readonly name: Prisma.FieldRef<"Campaign", 'String'>;
    readonly budgetTotal: Prisma.FieldRef<"Campaign", 'Int'>;
    readonly budgetUsed: Prisma.FieldRef<"Campaign", 'Int'>;
    readonly startAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly endAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Campaign", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
}
export type CampaignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
};
export type CampaignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
};
export type CampaignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
};
export type CampaignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type CampaignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type CampaignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
};
export type CampaignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type Campaign$envelopesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CampaignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
};
export {};
