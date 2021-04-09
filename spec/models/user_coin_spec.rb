# == Schema Information
#
# Table name: user_coins
#
#  id         :uuid             not null, primary key
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  coin_id    :uuid             not null
#  user_id    :uuid             not null
#
# Indexes
#
#  index_user_coins_on_coin_id              (coin_id)
#  index_user_coins_on_user_id              (user_id)
#  index_user_coins_on_user_id_and_coin_id  (user_id,coin_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (coin_id => coins.id)
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe UserCoin, type: :model do
  let(:user) { User.create({ username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456' }) }
  let(:coin) { Coin.create({ symbol: 'SYM', name: 'coin-name' }) }

  describe 'Validations' do
    it 'raises error when user is empty' do
      user_coin = described_class.create({ coin: coin, amount: 0.5 })

      expect(user_coin.errors.any?).to eq(true)
    end

    it 'raises error when coin is empty' do
      user_coin = described_class.create({ user: user, amount: 0.5 })

      expect(user_coin.errors.any?).to eq(true)
    end

    it 'raises error when combination of user and coin is not unique' do
      described_class.create({ user: user, coin: coin, amount: 0.5 })
      user_coin = described_class.create({ user: user, coin: coin, amount: 1.5 })

      expect(user_coin.errors.any?).to eq(true)
    end

    it 'does not raises any errors when only user is not unique' do
      unique_coin = Coin.create({ symbol: 'U-SYM', name: 'unique-coin-name' })
      described_class.create({ user: user, coin: coin, amount: 0.5 })
      user_coin = described_class.create({ user: user, coin: unique_coin, amount: 1.5 })

      expect(user_coin.errors.any?).to eq(false)
    end

    it 'does not raises any errors when only coin is not unique' do
      unique_user = User.create({ username: 'unique-username', email: 'unique@gmail.com', password: '123456', password_confirmation: '123456' })
      described_class.create({ user: user, coin: coin, amount: 0.5 })
      user_coin = described_class.create({ user: unique_user, coin: coin, amount: 1.5 })

      expect(user_coin.errors.any?).to eq(false)
    end

    it 'does not raises any errors when both user and coin are unique' do
      unique_user = User.create({ username: 'unique-username', email: 'unique@gmail.com', password: '123456', password_confirmation: '123456' })
      unique_coin = Coin.create({ symbol: 'U-SYM', name: 'unique-coin-name' })
      user_coin = described_class.create({ user: unique_user, coin: unique_coin, amount: 1.5 })

      expect(user_coin.errors.any?).to eq(false)
    end

    it 'raises error when amount is empty' do
      user_coin = described_class.create({ user: user, coin: coin })

      expect(user_coin.errors.any?).to eq(true)
    end
  end
end
