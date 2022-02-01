

ActiveRecord::Schema.define(version: 2022_02_01_100932) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
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
    t.text "role_details"
    t.text "job_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "categories_id", null: false
    t.bigint "users_id", null: false
    t.index ["categories_id"], name: "index_posts_on_categories_id"
    t.index ["users_id"], name: "index_posts_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "posts", "categories", column: "categories_id"
  add_foreign_key "posts", "users", column: "users_id"
end
