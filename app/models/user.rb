class User < ApplicationRecord
  COLORS = %w(#073642 #b58900 #cb4b16 #dc322f #d33682 #6c71c4 #268bd2 #2aa198 #859900)

  before_validation :assign_color

  validates_inclusion_of :color, in: COLORS
  validates_uniqueness_of :github_id
  validates_numericality_of :sign_in_count, greater_than_or_equal_to: 0, only_integer: true

  def assign_color
    self.color ||= COLORS.sample
  end
end
