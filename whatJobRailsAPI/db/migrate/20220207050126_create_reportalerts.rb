class CreateReportalerts < ActiveRecord::Migration[6.0]
  def change
    create_table :reportalerts do |t|
      t.integer :postid

      t.timestamps
    end
  end
end
