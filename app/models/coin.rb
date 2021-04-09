# == Schema Information
#
# Table name: coins
#
#  id         :uuid             not null, primary key
#  name       :string           not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_coins_on_symbol_and_name  (symbol,name) UNIQUE
#
class Coin < ApplicationRecord
  validates :symbol, presence: true, uniqueness: { scope: :name }
  validates :name, presence: true, uniqueness: { scope: :symbol }
end
