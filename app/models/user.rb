class User < ApplicationRecord
  validates_uniqueness_of :github_id
  validates_numericality_of :sign_in_count, greater_than_or_equal_to: 0, only_integer: true
end
