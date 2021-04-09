class CreateUserCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :user_coins, id: :uuid do |t|
      t.belongs_to :user, type: :uuid, null: false, foreign_key: true
      t.belongs_to :coin, type: :uuid, null: false, foreign_key: true
      t.float :amount, null: false

      t.timestamps
    end

    add_index :user_coins, %i[user_id coin_id], unique: true
  end
end
