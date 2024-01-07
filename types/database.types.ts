export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      careers: {
        Row: {
          company_name: string
          created_at: string
          end_date: string | null
          id: number
          role: string
          start_date: string
          title: string
        }
        Insert: {
          company_name: string
          created_at?: string
          end_date?: string | null
          id?: number
          role: string
          start_date: string
          title: string
        }
        Update: {
          company_name?: string
          created_at?: string
          end_date?: string | null
          id?: number
          role?: string
          start_date?: string
          title?: string
        }
        Relationships: []
      }
      project_images: {
        Row: {
          created_at: string
          description: string | null
          id: number
          order: number
          project_id: number
          url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          order?: number
          project_id: number
          url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          order?: number
          project_id?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      project_skills: {
        Row: {
          created_at: string
          id: number
          project_id: number
          skill_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          project_id: number
          skill_id: number
        }
        Update: {
          created_at?: string
          id?: number
          project_id?: number
          skill_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_skills_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          created_at: string
          description: string
          github_link: string | null
          id: number
          is_main: boolean
          is_published: boolean
          order: number
          slug: string
          summary: string
          thumbnail: string | null
          title: string
          year: number | null
          youtube_link: string | null
        }
        Insert: {
          created_at?: string
          description: string
          github_link?: string | null
          id?: number
          is_main?: boolean
          is_published?: boolean
          order?: number
          slug: string
          summary: string
          thumbnail?: string | null
          title: string
          year?: number | null
          youtube_link?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          github_link?: string | null
          id?: number
          is_main?: boolean
          is_published?: boolean
          order?: number
          slug?: string
          summary?: string
          thumbnail?: string | null
          title?: string
          year?: number | null
          youtube_link?: string | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          created_at: string
          icon: string | null
          id: number
          is_created: boolean
          name: string
          parent_id: number | null
        }
        Insert: {
          created_at?: string
          icon?: string | null
          id?: number
          is_created?: boolean
          name: string
          parent_id?: number | null
        }
        Update: {
          created_at?: string
          icon?: string | null
          id?: number
          is_created?: boolean
          name?: string
          parent_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "skills_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
