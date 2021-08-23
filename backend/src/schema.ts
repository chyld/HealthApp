import {
    intArg,
    makeSchema,
    nonNull,
    objectType,
    stringArg,
    inputObjectType,
    arg,
    asNexusMethod,
    enumType,
} from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
import { Context } from './context';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

const Query = objectType({
    name: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('logs', {
            type: 'Log',
            resolve: (_parent, _args, context: Context) => {
                return context.prisma.log.findMany();
            },
        });
    },
});

const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
        t.nonNull.field('addLog', {
            type: 'Log',
            args: {
                data: nonNull(
                    arg({
                        type: 'LogCreateInput',
                    }),
                ),
            },
            resolve: (_, args, context: Context) => {
                return context.prisma.log.create({
                    data: {
                        useBathroom: args.data.useBathroom,
                        caloriesOut: args.data.caloriesOut,
                    },
                });
            },
        });
    },
});

const Log = objectType({
    name: 'Log',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.field('date', { type: 'DateTime' });
        t.nonNull.boolean('useBathroom');
        t.nonNull.boolean('lowCalorie');
        t.nonNull.boolean('didFast');
        t.nonNull.boolean('noJunk');
        t.nonNull.boolean('takeVitamins');
        t.nonNull.boolean('sleep8');
        t.nonNull.boolean('didMeditate');
        t.nonNull.int('caloriesOut');
        t.nonNull.float('totalDistance');
        t.nonNull.float('runDistance');
        t.nonNull.int('weights');
        t.nonNull.int('cardio');
        t.nonNull.int('yoga');
        t.float('weight');
        t.string('comment');
        t.nonNull.field('createdAt', { type: 'DateTime' });
    },
});

const LogCreateInput = inputObjectType({
    name: 'LogCreateInput',
    definition(t) {
        t.nonNull.boolean('useBathroom');
        t.nonNull.boolean('lowCalorie');
        t.nonNull.boolean('didFast');
        t.nonNull.boolean('noJunk');
        t.nonNull.boolean('takeVitamins');
        t.nonNull.boolean('sleep8');
        t.nonNull.boolean('didMeditate');
        t.nonNull.int('caloriesOut');
        t.nonNull.float('totalDistance');
        t.nonNull.float('runDistance');
        t.nonNull.int('weights');
        t.nonNull.int('cardio');
        t.nonNull.int('yoga');
        t.float('weight');
        t.string('comment');
    },
});

export const schema = makeSchema({
    types: [Query, Mutation, Log, LogCreateInput, DateTime],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    contextType: {
        module: require.resolve('./context'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
});
