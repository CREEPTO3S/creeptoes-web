class CreateCoins < ActiveRecord::Migration[6.1]
  def change
    create_table :coins, id: :uuid do |t|
      t.string :symbol, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :coins, %i[symbol name], unique: true
  end
end
