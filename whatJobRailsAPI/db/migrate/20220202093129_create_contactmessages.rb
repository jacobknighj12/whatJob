class CreateContactmessages < ActiveRecord::Migration[6.0]
  def change
    create_table :contactmessages do |t|
      t.string :name
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
