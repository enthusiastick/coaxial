class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.integer :github_id
      t.string :handle
      t.datetime :last_signed_in_at
      t.integer :sign_in_count, default: 0

      t.timestamps
    end
    add_index :users, :github_id, unique: true
  end
end
