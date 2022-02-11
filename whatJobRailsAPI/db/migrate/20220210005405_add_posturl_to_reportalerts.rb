class AddPosturlToReportalerts < ActiveRecord::Migration[6.0]
  def change
    add_column :reportalerts, :posturl, :string
  end
end
