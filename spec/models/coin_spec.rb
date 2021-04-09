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
require 'rails_helper'

RSpec.describe Coin, type: :model do
  describe 'Validations' do
    it 'raises error when symbol is empty' do
      coin = described_class.create(name: 'coin-name')

      expect(coin.errors.any?).to eq(true)
    end

    it 'raises error when name is empty' do
      coin = described_class.create(symbol: 'SYM')

      expect(coin.errors.any?).to eq(true)
    end

    it 'raises error when combination of symbol and name is not unique' do
      described_class.create(symbol: 'SYM', name: 'coin-name')
      coin = described_class.create(symbol: 'SYM', name: 'coin-name')

      expect(coin.errors.any?).to eq(true)
    end

    it 'does not raises any errors when only symbol is not unique' do
      described_class.create(symbol: 'SYM', name: 'coin-name')
      coin = described_class.create(symbol: 'SYM', name: 'unique-coin-name')

      expect(coin.errors.any?).to eq(false)
    end

    it 'does not raises any errors when only name is not unique' do
      described_class.create(symbol: 'SYM', name: 'coin-name')
      coin = described_class.create(symbol: 'U-SYM', name: 'coin-name')

      expect(coin.errors.any?).to eq(false)
    end

    it 'does not raises any errors when both symbol and name are unique' do
      coin = described_class.create(symbol: 'SYM', name: 'coin-name')

      expect(coin.errors.any?).to eq(false)
    end
  end
end
