# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_31_105132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", null: false
    t.string "intro", null: false
    t.string "day_to_day"
    t.string "career_path"
    t.decimal "expected_salary_range_from"
    t.decimal "expected_salary_range_to"
    t.decimal "difficulty"
    t.string "job_security"
    t.string "industry_growth"
    t.string "work_life_balance"
    t.decimal "upvotes"
    t.decimal "downvotes"
    t.string "role_details"
    t.string "job_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "categories_id", null: false
    t.index ["categories_id"], name: "index_posts_on_categories_id"
  end

  add_foreign_key "posts", "categories", column: "categories_id"
end
