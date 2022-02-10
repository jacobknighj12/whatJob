class RemovePostidFromReportalerts < ActiveRecord::Migration[6.0]
  def change
    remove_column :reportalerts, :postid, :integer
  end
end
