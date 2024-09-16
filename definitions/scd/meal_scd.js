const scd=require("dataform-scd");

scd("scource_data_meals_scd", {
    uniqueKey: "meal_id",
    timestamp: "date",
    source: {
        schema: "raw",
        name: "meals"
    },
    columns: {meal_id: "mealid", calories: "calories", date: "ingestiondate"},
    incrementalConfig: {
        bigquery: {
            partitionBy: "date",
        },
    },
});