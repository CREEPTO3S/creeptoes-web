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
class UserCoinSerializer
  include JSONAPI::Serializer

  attributes :coin, :amount
end
