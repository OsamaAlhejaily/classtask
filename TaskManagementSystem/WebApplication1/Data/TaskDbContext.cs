using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;



namespace WebApplication1.Data
{
    
        public class TaskDbContext : DbContext
        {
            public TaskDbContext(DbContextOptions<TaskDbContext> options) : base(options) { }
            public DbSet<TaskItem> Tasks { get; set; }
        
        }
    }


