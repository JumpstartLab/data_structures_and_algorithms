class IterativeLinkedList

  def initialize
    @count = 0 
  end

  def count
    @count
  end

  def push(node)
    @count += 1
    @node = node
  end

  def pop
    @count -= 1
    @node
  end

  def delete(node)
    return @count if node != @node
    @count -= 1
  end
end
