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
class CoinSerializer
  include JSONAPI::Serializer

  attributes :symbol, :name, :amount
end
