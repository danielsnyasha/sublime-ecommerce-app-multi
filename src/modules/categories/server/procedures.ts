import { Category } from "@/payload-types";
import configPromise from '@payload-config';
import { getPayload } from 'payload';

import {baseProcedure, createTRPCRouter} from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {

        

          const data = await ctx.db.find({
            collection: "categories",
            pagination: false,
            depth: 1,
            where: {
              parent: {
                exists: false,
              },
            },
             sort: "name"
          });

          const formattedData = data.docs.map((doc)=>({
            ...doc,
            subcategories: (doc.subcategories?.docs?? []).map((doc)=>({
                ...(doc as Category),
                subcategories: undefined,
            }))
          }))
        return formattedData;
    })
})